# 參考 vs 複製

## 思路

1. `strings`、`numbers`、`boolean`
    基本型別是以傳值來賦予新的變數 value

    ```javascript
      let a = 10
      let b = a
      b = 200;
      console.log(a) // 10
      console.log(b) // 200
    ```

2. `array`

    陣列傳參考

    ```javascript
    const c = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    let d = c
    d[3] = 'HaHa'
    console.log(c) // ['Wes', 'Sarah', 'Ryan', 'HaHa'];
    console.log(d) // ['Wes', 'Sarah', 'Ryan', 'HaHa'];
    ```

    如何透過複製解決傳參考?

    - `Array.prototype.slice()`

      ```javascript
      d = d.slice(c)
      ```

    - `Array.prototype.concat()`

      ```javascript
      d = [].concat(c)
      ```

    - ES6 擴展

      ```javascript
      d = [...c]
      ```

    - `Array.from()`

      ```javascript
      d = Array.from(c)
      ```

3. `object`

    物件傳參考

    ```javascript
    const person2 = {
      name: 'Wes Bos',
      age: 80
    }
    const captain = person2
    captain.age = 1000000
    console.log(person2) // {name: "Wes Bos", age: 80, number: 1000000}
    console.log(captain) // {name: "Wes Bos", age: 80, number: 1000000}

    ```

    如何透過複製解決傳參考?

    - `Object.assign()` 淺拷貝（Shallow Copy）

      ```javascript
      let k = { a: 1, b: 10000 }
      let k2 = Object.assign({}, k)
      k2.b = 0
      console.log(k) // a: 1 b: 10000
      console.log(k2)// a: 1 b: 0
      ```

    - ES6 擴展 淺拷貝（Shallow Copy）

      ```javascript
      let obj = { a: 1, b: 10000 }
      let obj2 = { ...obj };
      obj2.b = 0
      console.log(obj) // a: 1 b: 10000
      console.log(obj2)// a: 1 b: 0
      ```

    - JSON 物件轉換`JSON.parse(JSON.stringify(obj));`  深拷貝（Deep Copy）

      ```javascript
      const bbb = {
      name: 'Wes',  
          age: 100,
          social: {
            twitter: '@wesbos',
            facebook: 'wesbos.developer'
          }
        };

      const ccc = JSON.parse(JSON.stringify(bbb));
      ccc.social.twitter = '123'
      console.log(bbb.social.twitter); // @wesbos
      console.log(ccc.social.twitter); // 123
      ```

## 結語

身為前端 javascript developer ，基本型態傳值，對於物件、陣列傳參考的概念，是一定要清楚的，若對這個觀念不熟悉，有時可能 debug 會卡一陣子，對於淺拷貝深拷貝的概念，也是滿重要的觀念，

自己有用過的 js library 的一些深拷貝方法，像是 Lodash 的 `_.cloneDeep()`、Ramda 的 `R.clone()`，因為 `JSON.parse(JSON.stringify(obj))`轉效能不太優，至於為什麼？爬文可以爬到比較完整詳細的資訊，[Performance comparision](https://frontbackend.com/javascript/what-is-the-the-fastest-way-to-deep-clone-an-object-in-javascript)
