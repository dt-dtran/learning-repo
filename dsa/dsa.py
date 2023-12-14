# dynamic array
import ctypes

class DynamicArray(object):
    def __init__(self):
        self.n = 0
        self.capacity = 1
        self.A = self.make_array(self.capacity)

    def __len__(self):
        return self.n

    def __getitem__(self,k):
        if not 0 <= k <self.n:
            return IndexError("K is out of bounds")
        return self.A[k]

    def append(self, element):
        if self.n == self.capacity:
            self._resize(2*self.capacity) #double capacity if not enough room

        self.A[self.n] = element #set self.n index to element
        self.n += 1

    def _resize(self, new_cap):
        B = self.make_array(new_cap) #make bigger array

        for k in range(self.n): #reference all existing values
            B[k] = self.A[k]

        self.A = B #call A the new bigger array
        self.capacity = new_cap #reset the capacity

    def make_array(self, new_cap):
        return (new_cap * ctypes.py_object)()

# instantiate
arr = DynamicArray()

#append new elemnt
arr.append(1)

#check length
len(arr)

arr.append(2)

# Stack LIFO
class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items)-1]

    def size(self):
        return len(self.items)

# Queue FIFO
class Queue:
    def __init__(self):
        self.items = []
    def isEmpty(self):
        return self.items == []
    def enqueue(self, item):
        self.items.insert(0,item)
    def dequeue(self):
        return self.items.pop()
    def size(self):
        return len(self.items)

# Deque hybrid (LIFO or LILO)
class Deque:
    def __init__(self):
        self.items = []
    def isEmpty(self):
        return self.items == []
    def addFront(self, item):
        self.items.append(item)
    def addRear(self, item):
        self.items.insert(0,item)
    def removeFront(self):
        return self.items.pop()
    def removeRear(self):
        return self.items.pop(0)
    def size(self):
        return len(self.items)
