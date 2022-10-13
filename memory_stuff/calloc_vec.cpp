#include <cstdlib>
#include<iostream>
#include<memory.h>
#include<chrono>
#include<cmath>

template<typename T>
class vec{
  public:
    size_t size;
    T *arr;
    size_t curr_idx;
    vec(size_t size){
      this->size = pow(2,log2(size));
      std::cout<<this->size<<std::endl;
      this->curr_idx = 0;
      arr = (T*)calloc(this->size, sizeof(T));
    }

    vec() {
      this->size = 1;
      this->curr_idx = 0;
      arr = (T*)calloc(this->size, sizeof(T));
    }

    void push_back(T data) {
      if(this->curr_idx == (this->size)) {
        this->size*=16;
        this->arr = (T*)realloc(this->arr, this->size*sizeof(T));
        this->arr[this->curr_idx] = data;
        this->curr_idx++;
      }
      else {
        this->arr[this->curr_idx] = data;
        this->curr_idx++;
      }
    }

    T get(int idx){
      return this->arr[idx];
    }

    T pop(){
      T data = this->arr[this->curr_idx];
      if(this->size > 16 * this->curr_idx){
        this->size = this->size/16;
        arr = (T*)realloc(this->arr, this->size*sizeof(T));
      }
      this->curr_idx--;
      return data;
    }

    ~vec(){
      free(this->arr);
    }
};

int main(int argc, char **argv){
  vec<int> v(10);
  int n = 1000000;
  auto start = std::chrono::system_clock::now();
  for(int i = 0; i < n; i++){
    v.push_back(i); 
  }
  //for (int i = 0; i < n; i++) std::cout<<v.get(i)<<std::endl;
  auto end = std::chrono::system_clock::now();
  std::chrono::duration<double> d = end - start;
  std::cout<<"Execution Time : "<<d.count()<<" seconds"<<std::endl; 
  return 0;
}
