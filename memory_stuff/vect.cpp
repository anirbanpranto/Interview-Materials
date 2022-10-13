#include<iostream>
#include<memory.h>
#include<chrono>
#include<cmath>
#include<vector>

template<typename T>
class vec{
  public:
    size_t size;
    T *arr;
    size_t curr_idx;
    vec(size_t size){
      this->size = pow(2,log2(size));
      this->curr_idx = 0;
      arr = new T[this->size];
    }

    vec() {
      this->size = 2;
      this->curr_idx = 0;
      arr = new T[this->size];
    }

    void push_back(T data) {
      if(this->curr_idx == (this->size)) {
        this->size*=16;
        T *temp = new T[this->size];
        memcpy(temp, arr, sizeof(T)*(this->size/16));
        delete []arr;
        this->arr = temp;
        this->arr[this->curr_idx] = data;
        this->curr_idx++;
      }
      else {
        this->arr[this->curr_idx] = data;
        this->curr_idx++;
      }
    }
    
    int& operator[](int idx) {
      if(idx > (int)this->curr_idx) exit(0);
      return this->arr[idx];
    }

    T pop(){
      T data = this->arr[this->curr_idx];
      if(this->size > 16 * this->curr_idx){
        this->size = this->size/16;
        T *temp = new T[this->size];
        memcpy(temp, arr, this->size);
        delete []arr;
        arr = temp;
      }
      this->curr_idx--;
      return data;
    }

    ~vec(){
      delete []arr;
    }
};

int main(int argc, char **argv){
  vec<char> v;
  int n = 1000000;
  auto start = std::chrono::system_clock::now();
  for(int i = 0; i < n; i++){
    v.push_back('m'); 
  }
  auto end = std::chrono::system_clock::now();
  std::chrono::duration<double> d = end - start;
  std::cout<<"Execution Time : "<<d.count()<<" seconds"<<std::endl;

  std::vector<char> v_2;
  auto start_2 = std::chrono::system_clock::now();
  for(int i = 0; i < n; i++){
    v_2.push_back('m'); 
  }
  auto end_2 = std::chrono::system_clock::now();
  std::chrono::duration<double> d_2 = end_2 - start_2;
  std::cout<<"Execution Time : "<<d_2.count()<<" seconds"<<std::endl; 

  return 0;
}
