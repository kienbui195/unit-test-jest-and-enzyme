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

_import { configure } from 'enzyme'; import Adapter from 'enzyme-adapter-react-16'; configure({ adapter: new Adapter() })_

# 3. Viết test

* Tạo file <Tên component>.test.js
* Việc test bắt đầu với <describe> block, với 2 params: đầu tiên là tên của cast test, phần thứ hai là phần muốn test
* Từ khóa <it()> thể hiện một test case hoặc một spec; mỗi case test có một hoặc nhiều kết quả test để kiểm tra tình trạng của code
* <expects(true).toBeTruthy()> với <toBeTruthy()> là một hàm so sánh được define sẵn. Trong jest mỗi hàm so sánh sẽ so sánh kết quả đầu ra mong muốn và kết quả thực tế và trả về boolean
* Các hàm so sánh trong Jest:
* toBe()
* toBeNull()
* toBeDefined()
* toBeUndefined()
* toBeTruthy()
* toBeFalsy()
* toBeGreaterThan()
* toBeLesserThan()
* toMatch()
* toContain()

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

