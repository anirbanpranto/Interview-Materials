#include<bits/stdc++.h>

using namespace std;

using ll = long long;

vector<vector<int>> subsets(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> subs;
        for(int i = 0; i < 1<<n; i++){
            vector<int> sub;
            for(int j = 0; j < n; j++){
                if(1<<j & i){
                    sub.push_back(nums[j]);
                }
            }
            subs.push_back(sub);
        }
        return subs;
}

void solve(int kes){
    vector<int> nums = {1,2,3};
    subsets(nums);
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
	int t=1;
	//cin>>t;
	for(int i = 0; i < t; i++){
		solve(i+1);
	}
}

