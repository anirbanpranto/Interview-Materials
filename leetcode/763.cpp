#include<bits/stdc++.h>

using namespace std;

using ll = long long;

vector<int> partitionLabels(string s) {
  vector<int> partitions;
  vector<pair<int, int>> alph(26, {501,-1});
  for(int i = 0; i < 26; i++){
    for(int j = 0; j < s.length(); j++){
      if(s[j] == ('a'+i)) {
       alph[i].first = min(alph[i].first, j);
       alph[i].second = max(alph[i].second, j);
      }
    }
  }
  sort(alph.begin(), alph.end());

  int currstart = alph[0].first;
  int currend = alph[0].second;
  int lastvalid = 0;
  for(int i = 0; i < 26; i++){
    if(alph[i].first <= currend){
        currend = max(currend, alph[i].second);
    }
    else{
        if(alph[i].first == 501 && alph[i].second == -1) {
            lastvalid = i - 1;
            break;
        }
        partitions.push_back(currend - currstart + 1);
        currstart = alph[i].first;
        currend = alph[i].second;
    }
  }
  auto b = alph[lastvalid];
  if(currend >= b.second)
    partitions.push_back(currend - currstart + 1);
  return partitions;
}

void solve(int kes){
  auto x = partitionLabels("eccbbbbdec");   
  for(auto a:x) cout<<a<<" ";
    cout<<endl;
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

