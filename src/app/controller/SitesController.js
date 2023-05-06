class SitesController {

    index(req, res) {
        res.render('home', {
            
            title: "Trang chu",
            authuser: req.authuser,
        })
    }
    procedureShow(req, res) {
        res.render('procedure', {
            title: "Thông tin thủ tục",
            authuser: req.authuser,
        })
    }
    priceListShow(req, res) {
        res.render('pricelist', {
            title: "Thông tin giá cả",
            authuser: req.authuser,
        })
    }
    contactShow(req, res) {
        res.render('contact', {
            title: "Thông tin liên lạc",
            authuser: req.authuser,
        })
    }
}

module.exports = new SitesController;