#include<bits/stdc++.h>

using namespace std;

using ll = long long;

struct TreeNode {
      int val;
      TreeNode *left;
      TreeNode *right;
      TreeNode() : val(0), left(nullptr), right(nullptr) {}
      TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
      TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

void printTree(TreeNode *root){
    if(root){
        cout<<root->val<<endl;
    }
    else return;
    printTree(root->left);
    printTree(root->right);
}

class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        //go to same level and swap
        if(!root) return nullptr;
        invertTree(root->left);
        invertTree(root->right);
        TreeNode *temp = root->right;
        root->right = root->left;
        root->left = temp;
        return root;
    }
};

void solve(int kes){
    TreeNode *root = new TreeNode(4);
    root->left = new TreeNode(2);
    root->right = new TreeNode(7);
    root->left->left = new TreeNode(1);
    root->left->right = new TreeNode(3);
    root->right->left = new TreeNode(6);
    root->right->right = new TreeNode(9);
    auto sol = new Solution();
    TreeNode *beep = sol->invertTree(root);
    printTree(beep);
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

