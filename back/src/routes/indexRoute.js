module.exports = function (app) {
  const index = require("../controllers/indexController");
  const jwtMiddleware = require("../../config/jwtMiddleware");

  // 라우터 정의
  // app.HTTP메서드(uri, 컨트롤러 콜백함수)
  // app.get("/dummy", index.example); /* indexController.js에서 example설정함 */

  //app.get("/dummy", function (req, res) {
  //  res.send("요청성공!~^^");
  //});

  // // 학생 테이블 조회
  // app.get("/students/:studentIdx",index.readStudents);
  // // 학생생성
  // app.post("/students", index.createStudent);
  // // 학생 업데이트
  // app.patch("/students/:studentIdx", index.updateStudent);
  //   // 학생 업데이트
  // app.delete("/students/:studentIdx", index.deleteStudent);    
// 식당 목록 조회
app.get("/restaurants", index.readRestaurants);
};
