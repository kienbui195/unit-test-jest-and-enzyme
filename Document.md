### Cách sử dụng Markdown: [Markdown](https://viblo.asia/helps/cach-su-dung-markdown-bxjvZYnwkJZ)

# 1. Test component trong React: unit test, functional test, integration test

**Unit test**

* Test từng phần code riêng với những chức năng mà chúng phụ trách.
* Phần unit test trong component phải trả lời được các câu hỏi:
* Có props nào không? Nếu có thì để làm gì?
* Nó render ra component nào?
* Nó có nên có state không? Khi nào và như thế nào nên update state?
* Có quá trình nào mà nó phải theo dõi khi được mount và unmount hoặc người dùng tương tác? (side effect)

**Functional test**

* Được sử dụng để test việc đối ứng một phần của hệ thống.
* Thường được viết dưới góc nhìn của người dùng.
* Một phần của chức năng không bị giới hạn bởi chỉ 1 component

**Integration test**

* Là quá trình gộp các component riêng biệt thành 1 nhóm, nhằm kiểm tra quá trình hoạt động của user
* Tuy thực hiện lâu hơn 2 loại trên nhưng được thực hiện trực tiếp

##### => Trong React thì Unit test và Functional test được sử dụng nhiều hơn vì dễ viết và bảo trì

**React unit test tool**

* Unit test của React Component có 1 chút khác biệt, thay vì xác minh đầu ra của các functions, unit test của React yc 4 mục đích kiểm tra đặc biệt: ** Test cơ bản Component Rendering ** Test props ** Test Events ** Test các hàm xử lí Event

# 2. Các tool

**Jest Test**

* Là một framework test không cần tùy chỉnh và rất dễ để cài đặt.
* Được phát triển bởi FB
* Jest chạy khá nhanh vì dùng kĩ thuật chạy test song song trong mỗi worker; mỗi lần chạy test được đưa vào môi trường sandbox riêng để tránh conflic với các case test khác
* Bao gồm performance, mocking, snapshot, code coverage, sandbox.
* Nếu sử dụng lệnh create-react-app thì đã có sẵn Jest
* react-test-render: render snapshot => thay vì phải render UI của cả ứng dụng thì chỉ giả lập render ra phần cần test => cài đặt: yarn add react-test-renderer
* snapshot sẽ lưu kết quả đầu ra của một thành phần được kết xuất vào tập tin và so sánh đầu ra của thành phần với snapshot trong các lần chạy tiếp theo. Điều này rất hữu ích trong việc biết khi nào thành phần của bạn thay đổi hành vi của nó.

**Enzyme**

* Enzyme của Airbnb, dễ sử dụng
* Enzyme là một thư viện bao bọc các gói như React TestUtils, JSDOM và CheerIO để tạo ra một giao diện đơn giản hơn để viết Unit Test.
* Cài đặt: yarn add enzyme enzyme-adapter-react-16
* Thêm config vào src/SetupTest.js:

```js

import { configure } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'; 
configure({ adapter: new Adapter() })

```
# 3. Viết test

* Tạo file <Tên component>.test.js
* Việc test bắt đầu với <describe> block, với 2 params: đầu tiên là tên của cast test, phần thứ hai là phần muốn test
* Từ khóa <it()> thể hiện một test case hoặc một spec; mỗi case test có một hoặc nhiều kết quả test để kiểm tra tình trạng của code
* `expects(true).toBeTruthy()` với `toBeTruthy()` là một hàm so sánh được define sẵn. Trong jest mỗi hàm so sánh sẽ so sánh kết quả đầu ra mong muốn và kết quả thực tế và trả về boolean
* Các hàm so sánh trong Jest:
* `toBe()`
* `toBeNull()`
* `toBeDefined()`
* `toBeUndefined()`
* `toBeTruthy()`
* `toBeFalsy()`
* `toBeGreaterThan()`
* `toBeLesserThan()`
* `toMatch()`
* `toContain()`

# 4. Should Know

**Xác minh giá trị của một state/props trong một component**

```js

const wrapper = shallow(<ComponentName />);
expect(wrapper.state().data).toBe('something');
expect(wrapper.props().data).toBe('something');

```

**Xác minh giá trị của thẻ**

```js

const wrapper = shallow(<ComponentName />);
expect(wrapper.find('h4').length).toBe(1);
expect(wrapper.find('h4').at(0).text()).toBe('Something');

```

**Mô phỏng sự kiện ấn nút**

```js

const wrapper = shallow(<ComponentName />);

expect(wrapper.state().data).toBe('state1');
wrapper.find('button').simulate('click');
expect(wrapper.state().data).toBe('state2');

```

**Trick**
* Xác nhận style
```js

wrapper.find('.myClassname').get(0).style;
expect(containerStyle).to.have.property('opacity', '1');

```
* Xác nhận class name

```js

const span = mount(<Test />).find('span');
expect(span.html().match(/style="([^"]*)"/i)[1]).toBe('color: #000;');

```

**Remark**
* Shallow Rendering
* Kiểm tra một component như một unit.

```js

import { shallow } from 'enzyme';

const wrapper = shallow(<MyComponent />);

```

**Full rendering**
* Các component có thể tương tác với API DOM hoặc có thể yêu cầu đầy đủ lifecycle để kiểm tra đầy đủ component.

```js

import { mount } from 'enzyme';

const wrapper = mount(<MyComponent />);

```

**Static Rendering**
* Nó được sử dụng để render components với HTML tĩnh và phân tích kết quả cấu trúc HTML

```js

import { render } from 'enzyme';

const wrapper = render(<MyComponent />);

```

# 5. Demo

* Từ demo cho thấy Jest là thư viện chính để viết test, tạo môi trường, còn tạo không gian ảo để test mà không cần render toàn bộ UI thì có thể sử dụng thêm thư viện enzyme hoặc react-test-render
* Test trên UI và từng chức năng

* Demo test tham khảo: (đều viết bằng cả enzyme và jest)
[Demo](https://github.com/wahengchang/react-test-must-know/tree/master/src/__tests__)
* Sample tham khảo: 
[Demo2](https://viblo.asia/p/gioi-thieu-ve-jest-delightful-javascript-testing-gDVK2wWeZLj)

# 6. Question

* Test cần được xây dựng dựa trên test function có trong comp hoặc 1 hàm chức năng riêng biệt, không tập trung vào test UI hay test các chức năng có thể xem trực tiếp trên màn hình

* Với các hàm không liên quan đến component thì không thể test bằng enzyme

# 7. Document
## 7.1. Jest
**Basic**

* `toBe()` giống so sánh `===` => `expect(sum(2,3)).toBe(5)`

* `toEqual()` giống so sánh `==` => `expect(sum(2,3)).toEqual(5)`

* Với các phép tính, hàm liên quan số thực, sử dụng `toBeClose()` => `expect(sum(.2,.3)).toBeClose(.5)` 

* VỚi String sử dụng `toMatch()` => 
```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

* Kiểm tra Array có chứa giá trị hay không chứa bằng `toContain()` => 
```js
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

* Kiểm tra một hàm có ném đúng lỗi ra không bằng `toThrow()` => 
```js
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});
```

**Testing Asynchronous Code**

* Promise: một promise được trả về, jest sẽ đợi đến khi có kết quả được xử lí, nếu promise bị reject thì kết quả trả về fail
```js
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

```

* Async/Await
```js
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
```

hoặc
```js
test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData()).rejects.toMatch('error');
});
```

Nếu mong muốn kết quả trả về là bị Reject thì sử dụng phương thức `.catch()`. Bảo đảm thêm `expect().assertions` để xác định số lần được gọi:
```js
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});
```

* Callbacks [Tìm hiểu thêm tại](https://jestjs.io/docs/asynchronous)

**Setup and Teardown**
* Trước khi vào các test case cần phải có 1 số cài đặt trc và sau khi test cần có 1 số cài đặt để hoàn thành, Jest cung cấp các tính năng này.
* Bao gồm: cấu hình lặp lại (`beforeEach()`, `afterEach()`) hoặc cấu hình một lần
* Thứ tự chạy các hàm before/after

```js
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
```
* Trong 1 khối mô tả `decribe()` có thứ tự chạy các lệnh:

```js
describe('describe outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');

    test('test 1', () => console.log('test 1'));
  });

  console.log('describe outer-b');

  test('test 2', () => console.log('test 2'));

  describe('describe inner 2', () => {
    console.log('describe inner 2');

    test('test 3', () => console.log('test 3'));
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test 1
// test 2
// test 3
```

* Nếu vừa có khối lệnh vừa có lệnh đơn thì sẽ có thứ tự chạy các khối lệnh:

```js
beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => {
  beforeEach(() => console.log('extra database setup'));
  afterEach(() => console.log('extra database teardown'));

  test('test 2', () => console.log('test 2'));
});

// connection setup
// database setup
// test 1
// database teardown
// connection teardown

// connection setup
// database setup
// extra database setup
// test 2
// extra database teardown
// database teardown
// connection teardown
```

* Lời khuyên chung: thay đổi key `test()` thành  `test.only()` nếu cần test chạy chỉ 1 lần

**Mock function**
* Tất cả mock func có 1 thuộc tính đặc biệt - `.mock`: đây là nơi lưu trữ dữ liệu về cách gọi hàm và nội dung hàm trả về
* Có thể xác định giá trị trả về của function
```js

// The function was called exactly once
expect(someMockFunction.mock.calls).toHaveLength(1);

// The first arg of the first call to the function was 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// The second arg of the first call to the function was 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// The return value of the first call to the function was 'return value'
expect(someMockFunction.mock.results[0].value).toBe('return value');

```

* Mock function trả về giá trị: đưa các giá trị thử nghiệm vào mã trong quá trình thử nghiệm; cũng rất hiệu quả trong mã sử dụng kiểu tiếp nối chức năng (giảm bớt sự rắc rối về hành vi trong hàm thực)

```js
const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12

```

**Mocking Modules**

* Giả lập module, ví dụ giả lập kết quả trả về của một call API:

```js

import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});

```

**Mocking Partials**

* Phương pháp này trong kiểm thử rất hữu ích khi mô-đun đang được kiểm thử có các phụ thuộc bên ngoài có thể không khả dụng hoặc không phù hợp cho việc kiểm thử, hoặc khi một số phần của mô-đun cần được sửa đổi cho mục đích kiểm thử. Bằng cách một phần giả mạo mô-đun, kiểm thử có thể kiểm soát hành vi của mô-đun trong quá trình kiểm thử mà

* (Quả sample trên doc khó hiểu quá không cho vào)

**Mock Implementations**

* Trong trường hợp muốn giả lập giá trị trả về (do khó xác định giá trị trả về thực tế) và có khả năng thay thế hoàn toàn việc triển khai hàm giả: sd `jest.fn()`, `mockInplementationOnce`
```js
const myMockFn = jest.fn(cb => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true
```

* phương thức `mockImplementation` hữu ích khi bạn cần xác định cài đặt của hàm giả được tạo từ module khác
* khi cần tái tạo lại 1 hành vi phức tạp của 1 hàm giả sao cho nhiều lệnh gọi hàm tạo ra nhiều kết quả khác nhau sử dụng method `mockImplementationOnce`

```js
const myMockFn = jest
  .fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

myMockFn((err, val) => console.log(val));
// > true

myMockFn((err, val) => console.log(val));
// > false
```

* Khi chức năng giả lập hết các triển khai được thực hiện bởi `mockImplementationOnce`, nó sẽ thực thi tập triển khai mặc định với `jest.fn` nếu nó được xác định

```js
const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'
```

* Đối với trường hợp có các phương thức được xâu chuỗi => giả lập API dưới dạng hàm `mockReturnThis()`

```js
const myObj = {
  myMethod: jest.fn().mockReturnThis(),
};

// is the same as

const otherObj = {
  myMethod: jest.fn(function () {
    return this;
  }),
};
```

**Mock Name**
* Có thể tùy ý cung cấp tên cho các chức năng mô phỏng bằng `mockName` thay vì là các `jest.fn` => nhanh chóng xác định hàm mô phỏng báo lỗi

**Custom Matchers**
* Một số hàm so khớp để làm cho việc xác nhận cách các hàm giả được gọi trở nên dễ dàng hơn: 
1. `toHaveBeenCalled`: xác định hàm được gọi ít nhất 1 lần
2. `toHaveBeenCalledWith(ag1, ag2)`: xác định hàm được gọi ít nhất 1 lần với các đối số chỉ định
3. `toHaveBeenLastCalledWith(ag1, ag2)`: hàm giả định được gọi cuối cùng với các đối số chỉ định
4. `toMatchSnapshot`: tất cả hàn gọi và tên mô phỏng được viết dưới dạng snapshot

* Hoặc có thể làm thủ công với các hàm so sánh cơ bản mà không cần dùng các hàm có sẵn trên nếu muốn.













