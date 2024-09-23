const con = {
    index: (req, res)=>{
        res.render('index');
    },
    abouts: (req, res)=>{
        res.render('about');
    },
    contacts: (req, res)=>{
        req.render('contacts');
    },
    users: (req, res)=>{
        req.render('users');
    },
    userdisplay: (req, res)=>{
        res.render('userdisplay');
    },
    products: (req, res)=>{
        req.render('products');
    }
};
module.exports = con;