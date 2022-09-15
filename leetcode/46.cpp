#include<bits/stdc++.h>

using namespace std;

using ll = long long;

vector<vector<int>> v;

void permutation(vector<int> a, vector<int> &nums, int n, map<int, bool>visited){
  if(a.size() == n){
    //push to answer and move on
    v.push_back(a);
    return;
  }
  for(int i = 0; i < n; i++){
    if(!visited[nums[i]]){
      a.push_back(nums[i]);
      visited[nums[i]] = true;
      permutation(a, nums, n, visited);
      visited[nums[i]] = false;
      a.pop_back();
    }
  }
}

void solve(int kes){
  vector<int> nums = {1,2,3};
  int n = nums.size();
  map<int,bool> vis;
  vector<int> a;
  permutation(a, nums, n, vis);
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
	int t=1;
	cin>>t;
	for(int i = 0; i < t; i++){
		solve(i+1);
	}
}

