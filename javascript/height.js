function BTNode(value) {
	this.val = value;
	this.left = null;
	this.right = null;
}
function BST(){
	this.root = null;

	this.add = function(val){
		if (this.root == null) {
			this.root = new BTNode(val);
		}else{
			var current = this.root
			while (current){
				if(current.val <= val){
					if(current.right){
						current = current.right
					}else{
						current.right = new BTNode(val)
						return this
					}					
				} else {
					if(current.left){
						current = current.left
					}else{
						current.left = new BTNode(val)
						return this
					}					
				}
			}
		}
		return this
	}
	this.height = function(){
		var level = 0;
		if (!this.root){
			return 0;
		}
		function rheight(cur, memo){
			if (cur.left){
				rheight(cur.left, memo + 1);
			}
			if (cur.right){
				rheight(cur.right, memo + 1);
			}
			if (memo > level){
				level = memo;
			}
		}
		rheight(this.root, 1);
		return level;
	}
	this.print = function(){
		function across(level, root1){
			var arr = [];
			for (var i=0; i<Math.pow(2, level); i++){
				var current = root1;
				var map = i.toString(2);
				var len = map.length;
				for (var j=0; j < level - len; j++){
					map = '0' + map;
				}
				for (var j=0; j<map.length; j++){
					if (map[j] == '0'){
						current = current.left;
					}
					else {
						current = current.right;
					}
					if (!current){
						arr.push(' ');
						break;
					}
				}
				if (current){
					arr.push(current.val);
				}
			}
			return arr;
		}
		if (!this.root){
			return;
		}
		console.log('*' + this.root.val);
		var h = this.height();
		for (var i=1; i<h; i++){
			var arr = across(i, this.root);
			var p = '*';
			for (var j=0; j<arr.length; j++){
				p += arr[j] + '*';
			}
			console.log(p);
		}
	}
	this.remove = function(val){
		var tmp;
		var current = this.root;
		while (current){
			if (val == current.val){
				break;
			}
			else if (val < current.val){
				tmp = current;
				current = current.left;
			}
			else {
				tmp = current;
				current = current.right;
			}
		}
		if (!current){
			return false;
		}
		if (current.right){
			tmp = current;
			current = current.right;
			if (current.left){
				while (current.left.left){
					current = current.left;
				}
				tmp.val = current.left.val;
				current.left = current.left.right;
			}
			else {
				tmp.val = current.val;
				tmp.right = current.right;
			}
		}
		else if (current.left) {
			current.val = current.left.val;
			tmp = current.left.right;
			current.left = current.left.left;
			current.right = tmp;
		}
		else {
			if (!tmp){
				this.root = null;
			}
			else if (current == tmp.left){
				tmp.left = null;
			}
			else {
				tmp.right = null;
			}
		}
		return true;
	}
}
var myBST = new BST;
myBST.add(5).add(6).add(10).add(8).add(9).add(14);
myBST.print();
console.log(myBST.height());
myBST.add(12).add(13).add(4).add(11).add(2).add(7).add(3).add(1);
myBST.print();
console.log(myBST.height());
