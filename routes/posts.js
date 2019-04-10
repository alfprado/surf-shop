const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts')
});

/* GET posts new /posts/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /posts')
});

/* POST posts create /posts */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts')
});

/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts')
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts')
});

/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts')
});

/* DELETE posts destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts')
});

module.exports = router;
