import Model from './model.js';
import View from './view.js';
import Router from './router.js'

(async () => {
        const header = document.querySelector('#header');
        await Model.login(51439908, 2 | 8192);
        const [me] = await Model.getUser({name_case: 'gen'});

        header.innerHTML = View.render('header', me);
        Router.init();
})();