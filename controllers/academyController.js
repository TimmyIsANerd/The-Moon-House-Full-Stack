


const main_dashboard_get = (req,res) =>{
    res.render('academy/dashboard/dashboard',{
        title:'Student Dashboard'
    });
}

module.exports = {
    main_dashboard_get
}