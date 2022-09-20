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
        queue<TreeNode*> q;
        TreeNode *head = root;
        q.push(head);
        while(!q.empty()){
            TreeNode *top = q.front();
            if(!top) {
                q.pop();
                continue;
            }
            TreeNode *temp = top->left;
            top->left = top->right;
            top->right = temp;
            if(top->left) q.push(top->left);
            if(top->right) q.push(top->right);
            q.pop();
        }
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

