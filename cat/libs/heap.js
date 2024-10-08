/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */
class Heap {
  /**
   * @param {function} compare
   * @param {array} [_values]
   * @param {number|string|object} [_leaf]
   */
  constructor(compare, _values, _leaf) {
    if (typeof compare !== "function") {
      throw new Error("Heap constructor expects a compare function");
    }
    this._compare = compare;
    this._nodes = Array.isArray(_values) ? _values : [];
    this._leaf = _leaf || null;
  }
  /**
   * Converts the heap to a cloned array without sorting.
   * @public
   * @returns {Array}
   */
  toArray() {
    return Array.from(this._nodes);
  }
  /**
   * Checks if a parent has a left child
   * @private
   */
  _hasLeftChild(parentIndex) {
    const leftChildIndex = parentIndex * 2 + 1;
    return leftChildIndex < this.size();
  }
  /**
   * Checks if a parent has a right child
   * @private
   */
  _hasRightChild(parentIndex) {
    const rightChildIndex = parentIndex * 2 + 2;
    return rightChildIndex < this.size();
  }
  /**
   * Compares two nodes
   * @private
   */
  _compareAt(i, j) {
    return this._compare(this._nodes[i], this._nodes[j]);
  }
  /**
   * Swaps two nodes in the heap
   * @private
   */
  _swap(i, j) {
    const temp = this._nodes[i];
    this._nodes[i] = this._nodes[j];
    this._nodes[j] = temp;
  }
  /**
   * Checks if parent and child should be swapped
   * @private
   */
  _shouldSwap(parentIndex, childIndex) {
    if (parentIndex < 0 || parentIndex >= this.size()) {
      return false;
    }
    if (childIndex < 0 || childIndex >= this.size()) {
      return false;
    }
    return this._compareAt(parentIndex, childIndex) > 0;
  }
  /**
   * Compares children of a parent
   * @private
   */
  _compareChildrenOf(parentIndex) {
    if (!this._hasLeftChild(parentIndex) && !this._hasRightChild(parentIndex)) {
      return -1;
    }
    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;
    if (!this._hasLeftChild(parentIndex)) {
      return rightChildIndex;
    }
    if (!this._hasRightChild(parentIndex)) {
      return leftChildIndex;
    }
    const compare = this._compareAt(leftChildIndex, rightChildIndex);
    return compare > 0 ? rightChildIndex : leftChildIndex;
  }
  /**
   * Compares two children before a position
   * @private
   */
  _compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
    const compare = this._compareAt(rightChildIndex, leftChildIndex);
    if (compare <= 0 && rightChildIndex < index) {
      return rightChildIndex;
    }
    return leftChildIndex;
  }
  /**
   * Recursively bubbles up a node if it's in a wrong position
   * @private
   */
  _heapifyUp(startIndex) {
    let childIndex = startIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }
  /**
   * Recursively bubbles down a node if it's in a wrong position
   * @private
   */
  _heapifyDown(startIndex) {
    let parentIndex = startIndex;
    let childIndex = this._compareChildrenOf(parentIndex);
    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this._compareChildrenOf(parentIndex);
    }
  }
  /**
   * Recursively bubbles down a node before a given index
   * @private
   */
  _heapifyDownUntil(index) {
    let parentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let childIndex;
    while (leftChildIndex < index) {
      childIndex = this._compareChildrenBefore(
        index,
        leftChildIndex,
        rightChildIndex
      );
      if (this._shouldSwap(parentIndex, childIndex)) {
        this._swap(parentIndex, childIndex);
      }
      parentIndex = childIndex;
      leftChildIndex = parentIndex * 2 + 1;
      rightChildIndex = parentIndex * 2 + 2;
    }
  }
  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {Heap}
   */
  insert(value) {
    this._nodes.push(value);
    this._heapifyUp(this.size() - 1);
    if (this._leaf === null || this._compare(value, this._leaf) > 0) {
      this._leaf = value;
    }
    return this;
  }
  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {Heap}
   */
  push(value) {
    return this.insert(value);
  }
  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  extractRoot() {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.root();
    this._nodes[0] = this._nodes[this.size() - 1];
    this._nodes.pop();
    this._heapifyDown(0);
    if (root === this._leaf) {
      this._leaf = this.root();
    }
    return root;
  }
  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  pop() {
    return this.extractRoot();
  }
  /**
   * Applies heap sort and return the values sorted by priority
   * @public
   * @returns {array}
   */
  sort() {
    for (let i = this.size() - 1; i > 0; i -= 1) {
      this._swap(0, i);
      this._heapifyDownUntil(i);
    }
    return this._nodes;
  }
  /**
   * Fixes node positions in the heap
   * @public
   * @returns {Heap}
   */
  fix() {
    for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i -= 1) {
      this._heapifyDown(i);
    }
    for (let i = Math.floor(this.size() / 2); i < this.size(); i += 1) {
      const value = this._nodes[i];
      if (this._leaf === null || this._compare(value, this._leaf) > 0) {
        this._leaf = value;
      }
    }
    return this;
  }
  /**
   * Verifies that all heap nodes are in the right position
   * @public
   * @returns {boolean}
   */
  isValid() {
    const isValidRecursive = (parentIndex) => {
      let isValidLeft = true;
      let isValidRight = true;
      if (this._hasLeftChild(parentIndex)) {
        const leftChildIndex = parentIndex * 2 + 1;
        if (this._compareAt(parentIndex, leftChildIndex) > 0) {
          return false;
        }
        isValidLeft = isValidRecursive(leftChildIndex);
      }
      if (this._hasRightChild(parentIndex)) {
        const rightChildIndex = parentIndex * 2 + 2;
        if (this._compareAt(parentIndex, rightChildIndex) > 0) {
          return false;
        }
        isValidRight = isValidRecursive(rightChildIndex);
      }
      return isValidLeft && isValidRight;
    };
    return isValidRecursive(0);
  }
  /**
   * Returns a shallow copy of the heap
   * @public
   * @returns {Heap}
   */
  clone() {
    return new Heap(this._compare, this._nodes.slice(), this._leaf);
  }
  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  root() {
    if (this.isEmpty()) {
      return null;
    }
    return this._nodes[0];
  }
  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  top() {
    return this.root();
  }
  /**
   * Returns a leaf node in the heap
   * @public
   * @returns {number|string|object}
   */
  leaf() {
    return this._leaf;
  }
  /**
   * Returns the number of nodes in the heap
   * @public
   * @returns {number}
   */
  size() {
    return this._nodes.length;
  }
  /**
   * Checks if the heap is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }
  /**
   * Clears the heap
   * @public
   */
  clear() {
    this._nodes = [];
    this._leaf = null;
  }
  /**
   * Implements an iterable on the heap
   * @public
   */
  [Symbol.iterator]() {
    let size = this.size();
    return {
      next: () => {
        size -= 1;
        return {
          value: this.pop(),
          done: size === -1
        };
      }
    };
  }
  /**
   * Builds a heap from a array of values
   * @public
   * @static
   * @param {array} values
   * @param {function} compare
   * @returns {Heap}
   */
  static heapify(values, compare) {
    if (!Array.isArray(values)) {
      throw new Error("Heap.heapify expects an array of values");
    }
    if (typeof compare !== "function") {
      throw new Error("Heap.heapify expects a compare function");
    }
    return new Heap(compare, values).fix();
  }
  /**
   * Checks if a list of values is a valid heap
   * @public
   * @static
   * @param {array} values
   * @param {function} compare
   * @returns {boolean}
   */
  static isHeapified(values, compare) {
    return new Heap(compare, values).isValid();
  }
}
export {
  Heap
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2xpYnMvaGVhcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAY29weXJpZ2h0IDIwMjAgRXlhcyBSYW5qb3VzIDxleWFzLnJhbmpvdXNAZ21haWwuY29tPlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBIZWFwIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlXHJcbiAgICogQHBhcmFtIHthcnJheX0gW192YWx1ZXNdXHJcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfG9iamVjdH0gW19sZWFmXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbXBhcmUsIF92YWx1ZXMsIF9sZWFmKSB7XHJcbiAgICBpZiAodHlwZW9mIGNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZWFwIGNvbnN0cnVjdG9yIGV4cGVjdHMgYSBjb21wYXJlIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb21wYXJlID0gY29tcGFyZTtcclxuICAgIHRoaXMuX25vZGVzID0gQXJyYXkuaXNBcnJheShfdmFsdWVzKSA/IF92YWx1ZXMgOiBbXTtcclxuICAgIHRoaXMuX2xlYWYgPSBfbGVhZiB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgdGhlIGhlYXAgdG8gYSBjbG9uZWQgYXJyYXkgd2l0aG91dCBzb3J0aW5nLlxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICovXHJcbiAgdG9BcnJheSgpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX25vZGVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIHBhcmVudCBoYXMgYSBsZWZ0IGNoaWxkXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfaGFzTGVmdENoaWxkKHBhcmVudEluZGV4KSB7XHJcbiAgICBjb25zdCBsZWZ0Q2hpbGRJbmRleCA9IChwYXJlbnRJbmRleCAqIDIpICsgMTtcclxuICAgIHJldHVybiBsZWZ0Q2hpbGRJbmRleCA8IHRoaXMuc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGEgcGFyZW50IGhhcyBhIHJpZ2h0IGNoaWxkXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfaGFzUmlnaHRDaGlsZChwYXJlbnRJbmRleCkge1xyXG4gICAgY29uc3QgcmlnaHRDaGlsZEluZGV4ID0gKHBhcmVudEluZGV4ICogMikgKyAyO1xyXG4gICAgcmV0dXJuIHJpZ2h0Q2hpbGRJbmRleCA8IHRoaXMuc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29tcGFyZXMgdHdvIG5vZGVzXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfY29tcGFyZUF0KGksIGopIHtcclxuICAgIHJldHVybiB0aGlzLl9jb21wYXJlKHRoaXMuX25vZGVzW2ldLCB0aGlzLl9ub2Rlc1tqXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTd2FwcyB0d28gbm9kZXMgaW4gdGhlIGhlYXBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9zd2FwKGksIGopIHtcclxuICAgIGNvbnN0IHRlbXAgPSB0aGlzLl9ub2Rlc1tpXTtcclxuICAgIHRoaXMuX25vZGVzW2ldID0gdGhpcy5fbm9kZXNbal07XHJcbiAgICB0aGlzLl9ub2Rlc1tqXSA9IHRlbXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgcGFyZW50IGFuZCBjaGlsZCBzaG91bGQgYmUgc3dhcHBlZFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3Nob3VsZFN3YXAocGFyZW50SW5kZXgsIGNoaWxkSW5kZXgpIHtcclxuICAgIGlmIChwYXJlbnRJbmRleCA8IDAgfHwgcGFyZW50SW5kZXggPj0gdGhpcy5zaXplKCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGlsZEluZGV4IDwgMCB8fCBjaGlsZEluZGV4ID49IHRoaXMuc2l6ZSgpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyZUF0KHBhcmVudEluZGV4LCBjaGlsZEluZGV4KSA+IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb21wYXJlcyBjaGlsZHJlbiBvZiBhIHBhcmVudFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2NvbXBhcmVDaGlsZHJlbk9mKHBhcmVudEluZGV4KSB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc0xlZnRDaGlsZChwYXJlbnRJbmRleCkgJiYgIXRoaXMuX2hhc1JpZ2h0Q2hpbGQocGFyZW50SW5kZXgpKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsZWZ0Q2hpbGRJbmRleCA9IChwYXJlbnRJbmRleCAqIDIpICsgMTtcclxuICAgIGNvbnN0IHJpZ2h0Q2hpbGRJbmRleCA9IChwYXJlbnRJbmRleCAqIDIpICsgMjtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2hhc0xlZnRDaGlsZChwYXJlbnRJbmRleCkpIHtcclxuICAgICAgcmV0dXJuIHJpZ2h0Q2hpbGRJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2hhc1JpZ2h0Q2hpbGQocGFyZW50SW5kZXgpKSB7XHJcbiAgICAgIHJldHVybiBsZWZ0Q2hpbGRJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb21wYXJlID0gdGhpcy5fY29tcGFyZUF0KGxlZnRDaGlsZEluZGV4LCByaWdodENoaWxkSW5kZXgpO1xyXG4gICAgcmV0dXJuIGNvbXBhcmUgPiAwID8gcmlnaHRDaGlsZEluZGV4IDogbGVmdENoaWxkSW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb21wYXJlcyB0d28gY2hpbGRyZW4gYmVmb3JlIGEgcG9zaXRpb25cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9jb21wYXJlQ2hpbGRyZW5CZWZvcmUoaW5kZXgsIGxlZnRDaGlsZEluZGV4LCByaWdodENoaWxkSW5kZXgpIHtcclxuICAgIGNvbnN0IGNvbXBhcmUgPSB0aGlzLl9jb21wYXJlQXQocmlnaHRDaGlsZEluZGV4LCBsZWZ0Q2hpbGRJbmRleCk7XHJcblxyXG4gICAgaWYgKGNvbXBhcmUgPD0gMCAmJiByaWdodENoaWxkSW5kZXggPCBpbmRleCkge1xyXG4gICAgICByZXR1cm4gcmlnaHRDaGlsZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsZWZ0Q2hpbGRJbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY3Vyc2l2ZWx5IGJ1YmJsZXMgdXAgYSBub2RlIGlmIGl0J3MgaW4gYSB3cm9uZyBwb3NpdGlvblxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2hlYXBpZnlVcChzdGFydEluZGV4KSB7XHJcbiAgICBsZXQgY2hpbGRJbmRleCA9IHN0YXJ0SW5kZXg7XHJcbiAgICBsZXQgcGFyZW50SW5kZXggPSBNYXRoLmZsb29yKChjaGlsZEluZGV4IC0gMSkgLyAyKTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5fc2hvdWxkU3dhcChwYXJlbnRJbmRleCwgY2hpbGRJbmRleCkpIHtcclxuICAgICAgdGhpcy5fc3dhcChwYXJlbnRJbmRleCwgY2hpbGRJbmRleCk7XHJcbiAgICAgIGNoaWxkSW5kZXggPSBwYXJlbnRJbmRleDtcclxuICAgICAgcGFyZW50SW5kZXggPSBNYXRoLmZsb29yKChjaGlsZEluZGV4IC0gMSkgLyAyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY3Vyc2l2ZWx5IGJ1YmJsZXMgZG93biBhIG5vZGUgaWYgaXQncyBpbiBhIHdyb25nIHBvc2l0aW9uXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfaGVhcGlmeURvd24oc3RhcnRJbmRleCkge1xyXG4gICAgbGV0IHBhcmVudEluZGV4ID0gc3RhcnRJbmRleDtcclxuICAgIGxldCBjaGlsZEluZGV4ID0gdGhpcy5fY29tcGFyZUNoaWxkcmVuT2YocGFyZW50SW5kZXgpO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLl9zaG91bGRTd2FwKHBhcmVudEluZGV4LCBjaGlsZEluZGV4KSkge1xyXG4gICAgICB0aGlzLl9zd2FwKHBhcmVudEluZGV4LCBjaGlsZEluZGV4KTtcclxuICAgICAgcGFyZW50SW5kZXggPSBjaGlsZEluZGV4O1xyXG4gICAgICBjaGlsZEluZGV4ID0gdGhpcy5fY29tcGFyZUNoaWxkcmVuT2YocGFyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVjdXJzaXZlbHkgYnViYmxlcyBkb3duIGEgbm9kZSBiZWZvcmUgYSBnaXZlbiBpbmRleFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2hlYXBpZnlEb3duVW50aWwoaW5kZXgpIHtcclxuICAgIGxldCBwYXJlbnRJbmRleCA9IDA7XHJcbiAgICBsZXQgbGVmdENoaWxkSW5kZXggPSAxO1xyXG4gICAgbGV0IHJpZ2h0Q2hpbGRJbmRleCA9IDI7XHJcbiAgICBsZXQgY2hpbGRJbmRleDtcclxuXHJcbiAgICB3aGlsZSAobGVmdENoaWxkSW5kZXggPCBpbmRleCkge1xyXG4gICAgICBjaGlsZEluZGV4ID0gdGhpcy5fY29tcGFyZUNoaWxkcmVuQmVmb3JlKFxyXG4gICAgICAgIGluZGV4LFxyXG4gICAgICAgIGxlZnRDaGlsZEluZGV4LFxyXG4gICAgICAgIHJpZ2h0Q2hpbGRJbmRleFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3Nob3VsZFN3YXAocGFyZW50SW5kZXgsIGNoaWxkSW5kZXgpKSB7XHJcbiAgICAgICAgdGhpcy5fc3dhcChwYXJlbnRJbmRleCwgY2hpbGRJbmRleCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhcmVudEluZGV4ID0gY2hpbGRJbmRleDtcclxuICAgICAgbGVmdENoaWxkSW5kZXggPSAocGFyZW50SW5kZXggKiAyKSArIDE7XHJcbiAgICAgIHJpZ2h0Q2hpbGRJbmRleCA9IChwYXJlbnRJbmRleCAqIDIpICsgMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc2VydHMgYSBuZXcgdmFsdWUgaW50byB0aGUgaGVhcFxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8b2JqZWN0fSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtIZWFwfVxyXG4gICAqL1xyXG4gIGluc2VydCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbm9kZXMucHVzaCh2YWx1ZSk7XHJcbiAgICB0aGlzLl9oZWFwaWZ5VXAodGhpcy5zaXplKCkgLSAxKTtcclxuICAgIGlmICh0aGlzLl9sZWFmID09PSBudWxsIHx8IHRoaXMuX2NvbXBhcmUodmFsdWUsIHRoaXMuX2xlYWYpID4gMCkge1xyXG4gICAgICB0aGlzLl9sZWFmID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc2VydHMgYSBuZXcgdmFsdWUgaW50byB0aGUgaGVhcFxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8b2JqZWN0fSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtIZWFwfVxyXG4gICAqL1xyXG4gIHB1c2godmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmluc2VydCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFuZCByZXR1cm5zIHRoZSByb290IG5vZGUgaW4gdGhlIGhlYXBcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxyXG4gICAqL1xyXG4gIGV4dHJhY3RSb290KCkge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3QoKTtcclxuICAgIHRoaXMuX25vZGVzWzBdID0gdGhpcy5fbm9kZXNbdGhpcy5zaXplKCkgLSAxXTtcclxuICAgIHRoaXMuX25vZGVzLnBvcCgpO1xyXG4gICAgdGhpcy5faGVhcGlmeURvd24oMCk7XHJcblxyXG4gICAgaWYgKHJvb3QgPT09IHRoaXMuX2xlYWYpIHtcclxuICAgICAgdGhpcy5fbGVhZiA9IHRoaXMucm9vdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByb290O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbmQgcmV0dXJucyB0aGUgcm9vdCBub2RlIGluIHRoZSBoZWFwXHJcbiAgICogQHB1YmxpY1xyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8c3RyaW5nfG9iamVjdH1cclxuICAgKi9cclxuICBwb3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHRyYWN0Um9vdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbGllcyBoZWFwIHNvcnQgYW5kIHJldHVybiB0aGUgdmFsdWVzIHNvcnRlZCBieSBwcmlvcml0eVxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICovXHJcbiAgc29ydCgpIHtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLnNpemUoKSAtIDE7IGkgPiAwOyBpIC09IDEpIHtcclxuICAgICAgdGhpcy5fc3dhcCgwLCBpKTtcclxuICAgICAgdGhpcy5faGVhcGlmeURvd25VbnRpbChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9ub2RlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpeGVzIG5vZGUgcG9zaXRpb25zIGluIHRoZSBoZWFwXHJcbiAgICogQHB1YmxpY1xyXG4gICAqIEByZXR1cm5zIHtIZWFwfVxyXG4gICAqL1xyXG4gIGZpeCgpIHtcclxuICAgIC8vIGZpeCBub2RlIHBvc2l0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3IodGhpcy5zaXplKCkgLyAyKSAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcbiAgICAgIHRoaXMuX2hlYXBpZnlEb3duKGkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpeCBsZWFmIHZhbHVlXHJcbiAgICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcih0aGlzLnNpemUoKSAvIDIpOyBpIDwgdGhpcy5zaXplKCk7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX25vZGVzW2ldO1xyXG4gICAgICBpZiAodGhpcy5fbGVhZiA9PT0gbnVsbCB8fCB0aGlzLl9jb21wYXJlKHZhbHVlLCB0aGlzLl9sZWFmKSA+IDApIHtcclxuICAgICAgICB0aGlzLl9sZWFmID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWVzIHRoYXQgYWxsIGhlYXAgbm9kZXMgYXJlIGluIHRoZSByaWdodCBwb3NpdGlvblxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1ZhbGlkKCkge1xyXG4gICAgY29uc3QgaXNWYWxpZFJlY3Vyc2l2ZSA9IChwYXJlbnRJbmRleCkgPT4ge1xyXG4gICAgICBsZXQgaXNWYWxpZExlZnQgPSB0cnVlO1xyXG4gICAgICBsZXQgaXNWYWxpZFJpZ2h0ID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9oYXNMZWZ0Q2hpbGQocGFyZW50SW5kZXgpKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdENoaWxkSW5kZXggPSAocGFyZW50SW5kZXggKiAyKSArIDE7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBhcmVBdChwYXJlbnRJbmRleCwgbGVmdENoaWxkSW5kZXgpID4gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1ZhbGlkTGVmdCA9IGlzVmFsaWRSZWN1cnNpdmUobGVmdENoaWxkSW5kZXgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5faGFzUmlnaHRDaGlsZChwYXJlbnRJbmRleCkpIHtcclxuICAgICAgICBjb25zdCByaWdodENoaWxkSW5kZXggPSAocGFyZW50SW5kZXggKiAyKSArIDI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBhcmVBdChwYXJlbnRJbmRleCwgcmlnaHRDaGlsZEluZGV4KSA+IDApIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNWYWxpZFJpZ2h0ID0gaXNWYWxpZFJlY3Vyc2l2ZShyaWdodENoaWxkSW5kZXgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaXNWYWxpZExlZnQgJiYgaXNWYWxpZFJpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaXNWYWxpZFJlY3Vyc2l2ZSgwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzaGFsbG93IGNvcHkgb2YgdGhlIGhlYXBcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge0hlYXB9XHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IEhlYXAodGhpcy5fY29tcGFyZSwgdGhpcy5fbm9kZXMuc2xpY2UoKSwgdGhpcy5fbGVhZik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSByb290IG5vZGUgaW4gdGhlIGhlYXBcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxyXG4gICAqL1xyXG4gIHJvb3QoKSB7XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX25vZGVzWzBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgcm9vdCBub2RlIGluIHRoZSBoZWFwXHJcbiAgICogQHB1YmxpY1xyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8c3RyaW5nfG9iamVjdH1cclxuICAgKi9cclxuICB0b3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb290KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgbGVhZiBub2RlIGluIHRoZSBoZWFwXHJcbiAgICogQHB1YmxpY1xyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8c3RyaW5nfG9iamVjdH1cclxuICAgKi9cclxuICBsZWFmKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlYWY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGhlYXBcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBzaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vZGVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUgaGVhcCBpcyBlbXB0eVxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2l6ZSgpID09PSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXJzIHRoZSBoZWFwXHJcbiAgICogQHB1YmxpY1xyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5fbm9kZXMgPSBbXTtcclxuICAgIHRoaXMuX2xlYWYgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW1wbGVtZW50cyBhbiBpdGVyYWJsZSBvbiB0aGUgaGVhcFxyXG4gICAqIEBwdWJsaWNcclxuICAgKi9cclxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgIGxldCBzaXplID0gdGhpcy5zaXplKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgc2l6ZSAtPSAxO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5wb3AoKSxcclxuICAgICAgICAgIGRvbmU6IHNpemUgPT09IC0xXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBhIGhlYXAgZnJvbSBhIGFycmF5IG9mIHZhbHVlc1xyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAc3RhdGljXHJcbiAgICogQHBhcmFtIHthcnJheX0gdmFsdWVzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZVxyXG4gICAqIEByZXR1cm5zIHtIZWFwfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBoZWFwaWZ5KHZhbHVlcywgY29tcGFyZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZWFwLmhlYXBpZnkgZXhwZWN0cyBhbiBhcnJheSBvZiB2YWx1ZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZWFwLmhlYXBpZnkgZXhwZWN0cyBhIGNvbXBhcmUgZnVuY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEhlYXAoY29tcGFyZSwgdmFsdWVzKS5maXgoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIGxpc3Qgb2YgdmFsdWVzIGlzIGEgdmFsaWQgaGVhcFxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAc3RhdGljXHJcbiAgICogQHBhcmFtIHthcnJheX0gdmFsdWVzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc0hlYXBpZmllZCh2YWx1ZXMsIGNvbXBhcmUpIHtcclxuICAgIHJldHVybiBuZXcgSGVhcChjb21wYXJlLCB2YWx1ZXMpLmlzVmFsaWQoKTtcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTU8sTUFBTSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTWhCLFlBQVksU0FBUyxTQUFTLE9BQU87QUFDbkMsUUFBSSxPQUFPLFlBQVksWUFBWTtBQUNqQyxZQUFNLElBQUksTUFBTSw2Q0FBNkM7QUFBQSxJQUMvRDtBQUNBLFNBQUssV0FBVztBQUNoQixTQUFLLFNBQVMsTUFBTSxRQUFRLE9BQU8sSUFBSSxVQUFVLENBQUM7QUFDbEQsU0FBSyxRQUFRLFNBQVM7QUFBQSxFQUN4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLFVBQVU7QUFDUixXQUFPLE1BQU0sS0FBSyxLQUFLLE1BQU07QUFBQSxFQUMvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxjQUFjLGFBQWE7QUFDekIsVUFBTSxpQkFBa0IsY0FBYyxJQUFLO0FBQzNDLFdBQU8saUJBQWlCLEtBQUssS0FBSztBQUFBLEVBQ3BDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLGVBQWUsYUFBYTtBQUMxQixVQUFNLGtCQUFtQixjQUFjLElBQUs7QUFDNUMsV0FBTyxrQkFBa0IsS0FBSyxLQUFLO0FBQUEsRUFDckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsV0FBVyxHQUFHLEdBQUc7QUFDZixXQUFPLEtBQUssU0FBUyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUM7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
