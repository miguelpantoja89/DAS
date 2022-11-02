// SQL_injection.js
router.get('/example3/user/:id', (req,res) => {
let userId = req.params.id;
connection.query({
sql : "SELECT * FROM users WHERE id=" +userId
},(err, result) => {
res.json(result);
