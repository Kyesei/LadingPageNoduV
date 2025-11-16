//hola mundo
document.addEventListener('DOMContentLoaded', function () {
            
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    const menuLinks = mobileMenu.getElementsByTagName('a');
    for (let link of menuLinks) {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    }

   
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const passwordModal = document.getElementById('password-modal'); 
    const monthlyPlanModal = document.getElementById('monthly-plan-modal'); 
    const annualPlanModal = document.getElementById('annual-plan-modal'); 

    const openLoginBtn = document.getElementById('open-login-button');
    const openLoginBtnMobile = document.getElementById('open-login-button-mobile');
    const openRegisterBtn = document.getElementById('open-register-button');
    const openRegisterBtnFooter = document.getElementById('open-register-button-footer');
    const openPasswordLink = document.getElementById('open-password-link'); 
    const openMonthlyPlanBtn = document.getElementById('open-monthly-plan'); 
    const openAnnualPlanBtn = document.getElementById('open-annual-plan'); 

    const closeLoginBtn = document.getElementById('close-login-modal');
    const closeRegisterBtn = document.getElementById('close-register-modal');
    const closePasswordBtn = document.getElementById('close-password-modal'); 
    const closeMonthlyPlanBtn = document.getElementById('close-monthly-plan-modal'); 
    const closeAnnualPlanBtn = document.getElementById('close-annual-plan-modal'); 


    const gotoRegisterLink = document.getElementById('open-register-link');
    const gotoLoginLink = document.getElementById('open-login-link');
    const backToLoginLink = document.getElementById('back-to-login-link'); 

    function hideAllModals() {
        if (loginModal) loginModal.classList.add('hidden');
        if (registerModal) registerModal.classList.add('hidden');
        if (passwordModal) passwordModal.classList.add('hidden');
        if (monthlyPlanModal) monthlyPlanModal.classList.add('hidden');
        if (annualPlanModal) annualPlanModal.classList.add('hidden');
    }
    
    function showLoginModal() {
        hideAllModals();
        if (loginModal) loginModal.classList.remove('hidden');
    }
    function showRegisterModal() {
        hideAllModals();
        if (registerModal) registerModal.classList.remove('hidden');
    }
    function showPasswordModal() {
        hideAllModals();
        if (passwordModal) passwordModal.classList.remove('hidden');
    }
    function showMonthlyPlanModal() {
        hideAllModals();
        if (monthlyPlanModal) monthlyPlanModal.classList.remove('hidden');
    }
    function showAnnualPlanModal() {
        hideAllModals();
        if (annualPlanModal) annualPlanModal.classList.remove('hidden');
    }


    if (openLoginBtn) openLoginBtn.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
    if (openLoginBtnMobile) openLoginBtnMobile.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
    if (openRegisterBtn) openRegisterBtn.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
    if (openRegisterBtnFooter) openRegisterBtnFooter.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
    if (openPasswordLink) openPasswordLink.addEventListener('click', (e) => { e.preventDefault(); showPasswordModal(); });
    if (openMonthlyPlanBtn) openMonthlyPlanBtn.addEventListener('click', (e) => { e.preventDefault(); showMonthlyPlanModal(); });
    if (openAnnualPlanBtn) openAnnualPlanBtn.addEventListener('click', (e) => { e.preventDefault(); showAnnualPlanModal(); });

    if (closeLoginBtn) closeLoginBtn.addEventListener('click', hideAllModals);
    if (closeRegisterBtn) closeRegisterBtn.addEventListener('click', hideAllModals);
    if (closePasswordBtn) closePasswordBtn.addEventListener('click', hideAllModals);
    if (closeMonthlyPlanBtn) closeMonthlyPlanBtn.addEventListener('click', hideAllModals);
    if (closeAnnualPlanBtn) closeAnnualPlanBtn.addEventListener('click', hideAllModS);

    if(gotoRegisterLink) {
        gotoRegisterLink.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
    }
    if(gotoLoginLink) {
        gotoLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
    }
    if(backToLoginLink) {
        backToLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
    }

    [loginModal, registerModal, passwordModal, monthlyPlanModal, annualPlanModal].forEach(modal => {
        if(modal) {
            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    hideAllModals();
                }
            });
        }
    });


    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const passwordForm = document.getElementById('password-form');

    function simulateLogin(e) {
        e.preventDefault(); 
        console.log('Accediendo... Redirigiendo a dashboard.html');
        alert('¡Simulación de inicio de sesión exitosa!');
        hideAllModals();
    }
    
    function simulatePasswordReset(e) {
        e.preventDefault();
        console.log('Enviando enlace de recuperación...');
        hideAllModals();
        alert('Se ha enviado un enlace de recuperación a tu correo electrónico.');
    }

    if (loginForm) loginForm.addEventListener('submit', simulateLogin);
    if (registerForm) registerForm.addEventListener('submit', simulateLogin);
    if (passwordForm) passwordForm.addEventListener('submit', simulatePasswordReset);

});
