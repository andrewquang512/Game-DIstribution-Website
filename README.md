# Game Distribution Website ![Build Status](https://github.com/andrewquang512/Game-DIstribution-Website/actions/workflows/main.yml/badge.svg)
## Tổng quan
Game Digital Distribution website là một ứng dụng website giúp đưa các ấn phẩm game đến tay người dùng online mà không cần các thiết bị ghi nhớ như đĩa CD, USB, ổ cứng. Ngoài ra, ứng dụng web này cũng đóng vai trò là nơi trung gian giúp các nhà phát triển game - những người tạo ra game và muốn kinh doanh chúng, dễ dàng tiếp cận với những khách hàng đang có nhu cầu. Với các nhà phát triển game, việc đưa ấn phẩm lên các ứng dụng phân phối game là một cách quảng bá tuyệt vời nhưng chỉ tốn chi phí nhỏ.

Hiện nay tại Việt Nam, lượng các website phân phối game vẫn còn hạn chế. Vì vậy mà nhóm xây dựng một webapp tích hợp mà ở đó người dùng, quản trị viên website và nhà phân phối đều có thể dùng. Webapp tập trung vào việc phân phối game (nhà phân phối) và mua bán game (người dùng). Khách hàng có thể mua những game chất lượng và đạt các tiêu chuẩn về cộng đồng, cùng với một hệ thống ổn định và dễ dùng, sẽ nâng cao trải nghiệm người dùng.

## Một số hình ảnh về giao diện cơ bản
### Giao diện khách hàng
#### Đăng nhập
![Đăng nhập](/Images/G_login.png)
#### Đăng ký
![Đăng ký](/Images/G_signup.png)
#### Trang chủ
![Trang chủ 1](/Images/G_trang_chu_1.png)

![Trang chủ 2](/Images/G_trang_chu_2.png)
#### Thông tin game
![info1](/Images/G_thong_tin_game.png)
![info2](/Images/G_thong_tin_game_2.png)
#### Giỏ hàng
![cart](/Images/G_cart.png)
#### Thanh toán
##### Điền thông tin nhận hàng
![address](/Images/G_Addr.png)
##### Thanh toán (Paypal)
![papal](/Images/G_Paypal.png)
##### Kiểm tra giỏ hàng
![check_cart](/Images/G_Checkout.png)
##### Thanh toán thành công
![pay_success](/Images/G_PaySuc.png)
### Giao diện quản trị viên
![Admin1](/Images/admin.png)
![Admin2](/Images/admin2.png)
### Giao diện nhà phát hành game
![Provider](/Images/G_Provider.png)
#### Upload game lên hệ thống
![Upload](/Images/G_Upload.png)

## Công nghệ sử dụng
Nhóm sử dụng MERN Stack để hiện thực trang web phân phối game. 

MERN Stack là viết tắt cho 4 công nghệ cốt lõi tạo nên một Stack gồm:
- MongoDB
- Express.js
- React.js
- NodeJS

## Hướng dẫn tải về project
```
$ git clone https://github.com/andrewquang512/Game-DIstribution-Website.git
```
## Tải các package cần thiết
### Tải các package cho client
```bash
$ cd client
$ npm install
```
### Tải các package cho backend
```bash
$ cd backend
$ npm install
```
## Hướng dẫn chạy
### Chạy backend
```bash
$ cd backend
$ npm run server
```
### Chạy client
```bash
cd client
npm start
```