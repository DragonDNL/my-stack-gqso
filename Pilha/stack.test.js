const stack = require('./stack');

beforeEach(() =>{
    s = new stack();
});

test('Testar pilha vazia na criação', () => {
    expect(s.isEmpty()).toEqual(true);
});

test('Testar pilha não vazia', () => {
    s.push(5);
    expect(s.isEmpty()).toEqual(false);
});

test('Testar pilha vazia após inserir e remover um elemento', () => {
    s.push(5);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Verificar tamanho correto da pilha', () => {
    s.push(25);
    s.push(30);
    s.push(50);
    expect(s.size()).toBe(3);    
});

test('Testar remover elemento de pilha vazia', () => {
    s.push(5);
    s.pop();
    expect(() => {s.pop()}).toThrow();
});

test('Testar inserir e retirar várias vezes', () => {
    s.push(10);
    s.pop();
    s.push(15);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Testar inserir e retirar várias vezes', () => {
    s.push(10);
    s.pop();
    s.push(15);
    s.pop();
    s.push(50);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Verificar tamanho correto da pilha', () => {
    s.push(25);
    s.push(30);
    s.push(50);
    s.pop();
    s.push(40);
    expect(s.size()).toBe(3);    
});

test('Verificar tamanho correto da pilha', () => {
    s.push(25);
    s.push(30);
    s.push(50);
    s.pop();
    s.push(40);
    s.pop();
    s.pop();
    expect(s.size()).toBe(1);    
});

test('Verificar tamanho correto da pilha', () => {
    s.push(25);
    s.push(30);
    s.push(50);
    s.pop();
    s.push(40);
    s.push(60);
    s.push(13);
    s.pop();
    s.pop();
    s.pop();
    expect(s.size()).toBe(2);    
});

test('Testar inserir e retirar várias vezes e depois verificar o tamanho da pilha', () => {
    s.push(10);
    s.pop();
    s.push(15);
    s.pop();
    s.push(20);
    expect(s.isEmpty()).toEqual(false);
    expect(s.size()).toBe(1); 
});

test('Verificar tamanho correto da pilha', () => {
    expect(s.size()).toBe(0);    
});

test('Testar pilha não vazia e depois verificar o tamanho da pilha', () => {
    s.push(5);
    s.pop();
    s.push(10);
    expect(s.isEmpty()).toEqual(false);
    expect(s.size()).toBe(1);
});

test('Verificar tamanho correto da pilha e verificar se está vazia', () => {
    s.push(25);
    s.push(30);
    s.push(50);
    s.push(50);
    s.push(50);
    s.push(50);
    s.push(50);
    s.push(50);
    expect(s.size()).toBe(8);
    expect(s.isEmpty()).toEqual(false);
});

test('Acrescentar elemento na pilha, remover elemento e verificar o tamanho da pilha', () => {
    s.push(25);
    s.push(30);
    s.pop();
    expect(s.size()).toBe(1);
    expect(s.isEmpty()).toEqual(false);
});