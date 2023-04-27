class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    //삽입
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    //삭제
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    //맨 앞에 있는거 꺼내기
    peek() {
        return this.items[this.headIndex];
    }
    //길이 구하기
    getLength() {
        return this.tailIndex - this.headIndex;
    }
    //전체 아이템 반환
    getItems() {
        return this.items;
    }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);

console.log("큐객체", queue);
console.log("꼭대기", queue.peek());
console.log("총개수", queue.getLength());
console.log("전체 아이템", queue.getItems());

while (queue.getLength() != 0) {
    console.log(queue.dequeue());
}
