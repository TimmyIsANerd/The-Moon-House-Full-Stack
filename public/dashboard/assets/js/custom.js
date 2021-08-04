// $(document).ready(function(){

//     // Hide Deposit Section
//     $("#dashboard_deposit").hide();

//     // Open Deposit Section
//     $("#quick_deposit").click(function(){
//       $("#main_dashboard").fadeOut(500);
//       $("#dashboard_deposit").fadeIn(500);
//     })

//     // Back to Main Dashboard Button
//     $("#back_to_dashboard").click(function(){
//       $("#dashboard_deposit").fadeOut(500);
//       $("#main_dashboard").fadeIn(500);
//     });

//     let $dashboard = $("#main_dashboard");

//     // Deposit Option Toggle
//     // $('#usdt_qr').hide();
//     // $('#card_deposit_option').click(function(){
//     //   // Switch Active Tab Classes
//     //   $('#card_deposit_option').addClass('tab-active');
//     //   $('#usdt_deposit_option').removeClass('tab-active');

//     //   // Hide Crypto Deposit Option
//     //   $('#usdt_qr').hide(500);
//     //   $('#atm_deposit').show(500);
//     // })

//     // $('#usdt_deposit_option').click(function(){
//     //   // Switch Active Tab Classes
//     //   $('#usdt_deposit_option').addClass('tab-active');
//     //   $('#card_deposit_option').removeClass('tab-active');

//     //   // Hide Crypto Deposit Option
//     //   $('#atm_deposit').hide(500);
//     //   $('#usdt_qr').show(500);
//     // })
//     // Investment Form Section 
//     let $investmentForm = $('#investmentform');
//     let $vipOption = $('#vip_package_option');
//     let $exclusiveOption = $('#exclusive_package_option');
//     let $vipSection = $('#vip_package_section');
//     let $exclusiveSection = $('#exclusive_package_section');
//     let $returntoDash = $('#back_to_dashboard_investment_form');

//     $investmentForm.hide()
//     $vipSection.hide();
//     $exclusiveSection.hide();
//     // When VIP Option Clicked
//     $vipOption.click(()=>{
//       $dashboard.fadeOut(400);
//       $investmentForm.fadeIn(500);
//       $exclusiveSection.hide();

//       $vipSection.fadeIn(500);
//     })
//     // When Exclusive Option Clicked
//     $exclusiveOption.click(()=>{
//       $dashboard.fadeOut(400);
//       $investmentForm.fadeIn(500);
//       $vipSection.hide();


//       $exclusiveSection.fadeIn(500);
//     })
//     // Return to Dashboard
//     $returntoDash.click(()=>{
//       $investmentForm.fadeOut(400);

//       $dashboard.fadeIn(500);

//     })
//     // Investment Form 
//     let $vipForm = $('#investmentConfirmFillForm');
//     let $15PercentOption = $('#monthlyPayOption');
//     console.log(amount)
//     let $100PercentOption = $('#6thMonthOption');
//     let $vipConfirmInvest = $('#vipInvestConfirmationMessage');
//     let $confirmInvestmentBtn = $('#submitInvestment');
//     let $amount = amount;






//     // ROI Calculator
//     let $roicalculator = $('#roi_calculator_section');
//     let $roicalculatorBtnShow = $('#roi_calculator_btn');
//     let $closeroicalculator = $('#back_to_dashboard_cal');
//     let $calulatorForm = $('#dashboard_roi_calculator');

//     // Hide Calculator
//     $roicalculator.hide();
//     // $calulatorForm.hide();
//     $roicalculatorBtnShow.click(function(){
//       $dashboard.fadeOut(500);
//       $roicalculator.fadeIn(800);
//     });
//     $closeroicalculator.click(function(){
//       $dashboard.fadeIn(800);
//       $roicalculator.fadeOut(500);
//     });


//     // Calculator Logic
//     $calulatorForm.submit((e)=>{
//       e.preventDefault();
//       let $investmentCapital = $('investmentCapital' ).val();


//     })


//     // Available Services

// });