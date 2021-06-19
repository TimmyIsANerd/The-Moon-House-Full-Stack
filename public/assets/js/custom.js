$(document).ready(()=>{
    // Keep page from refreshing when submit event occurs.
    $('.vipformroi-calculator').submit(function(e){
        e.preventDefault();
        if(vipcapital.value < 999){
            $('.pay-alert').fadeOut(800,()=>{
                // Set default value of monthly VIP ROI
                var capital = eval(vipcapital.value);
                var capitalNaira = capital * 500;
                var capitalNairaHold = capitalNaira;
                var capitalNaira = capitalNaira.toLocaleString();
                var monthlyROI = capital * 0.15;
                var totalMonthsROI = eval(monthlyROI) * 6;
                var totalInvestmentROIDollar = eval(capital) + eval(totalMonthsROI);
                var totalInvestmentNaira = eval(totalInvestmentROIDollar) * 500;
                var totalInvestmentNaira = totalInvestmentNaira.toLocaleString();
                var fullROI = vipcapital.value * 1;
                var fullROIPayment = (eval(capitalNairaHold)) * 2;
                var fullROIPaymentNaira = fullROIPayment.toLocaleString();
                var inNaira = monthlyROI * 500;
                var roiNaira = inNaira.toLocaleString();
                $('.pay-alert').html(`
                <div>
                    <h5 class="orange">Monthly Returns</h5>
                    Capital : $${capital}/#${capitalNaira}
                    <br>ROI: $${monthlyROI}/#${roiNaira} every month.<br> (6 Months) Your ROI + Capital : $${totalInvestmentROIDollar}/#${totalInvestmentNaira}
                </div>
                <br>
                <div>
                    <h5 class="mt-2 mb-0 orange">6th Month Payment Option</h5> <br>100% ROI : $${fullROI} <br>
                    Your ROI + Capital : $${fullROI * 2}/#${fullROIPaymentNaira}<br>
                </div>
                <p style="font-weight:300">Conversion Rate $1 : #500</p>
                <a class="text-center quote-btn mt-1 invest-now-btn" href="/invest_signup">Invest Now</a>`);
                $('.pay-alert').fadeIn(800);
                $('.invest-now-btn').fadeIn(800);
            }
        )};
        if(vipcapital.value > 1000){
            $('.pay-alert').fadeOut(800,()=>{
                $('.pay-alert').html(`Capital greater that $1000 are reserved for our Exclusive Package.`);
                $('.pay-alert').fadeIn(800)
            });
        }
    });
    $('.exclusiveformroi-calculator').submit(function(e){
        e.preventDefault();
        if(exclusivecapital.value >= 1000){
            $('.exclusive-pay-alert').fadeOut(800,()=>{
                // Set default values of Exclusive ROI
                var exclusiveROIMin = exclusivecapital.value * 1;
                var exclusiveROIMax = exclusivecapital.value * 2;
                var exclusiveROIMinNaira = exclusiveROIMin * 500;
                var exclusiveROIMaxNaira = exclusiveROIMax * 500;
                let nairaROIMin = exclusiveROIMinNaira.toLocaleString();
                let nairaROIMax = exclusiveROIMaxNaira.toLocaleString();
                $('.exclusive-pay-alert').html(`
                <h5 class="orange">6th Month Payment</h5>
                Minimum ROI Estimate 100 - 200% : $${exclusiveROIMin} & $${exclusiveROIMax}<br>
                ROI Target : 1000% <br>
                Naira Conversion : #${nairaROIMin} - #${nairaROIMax}.<br>
                <p style="font-weight:300">Conversion Rate $1 : #500</p>
                <p style="font-weight:200">Terms of this investment state that the profit from all the trading done within the duration will be split 50/50.<br>Contact Us for inquiries about this investment plan.</p>
                <a class="text-center quote-btn mt-3 invest-now-btn" href="/invest_signup">Invest Now</a>`);
                $('.exclusive-pay-alert').fadeIn(800);
                $('.invest-now-btn').fadeIn(800);
            });
        }
        if(exclusivecapital.value < 1000){
            $('.exclusive-pay-alert').fadeOut(800,()=>{
                $('.exclusive-pay-alert').html(`Capital less that $1000 are reserved for our VIP Package.`);
                $('.exclusive-pay-alert').fadeIn(800);
            })
        };
    });
    // Set default value of monthly VIP ROI
    var capital = eval(vipcapital.value);
    var capitalNaira = capital * 500;
    var capitalNairaHold = capitalNaira;
    var capitalNaira = capitalNaira.toLocaleString();
    var monthlyROI = capital * 0.15;
    var totalMonthsROI = eval(monthlyROI) * 6;
    var totalInvestmentROIDollar = eval(capital) + eval(totalMonthsROI);
    var totalInvestmentNaira = eval(totalInvestmentROIDollar) * 500;
    var totalInvestmentNaira = totalInvestmentNaira.toLocaleString();
    var fullROI = vipcapital.value * 1;
    var fullROIPayment = (eval(capitalNairaHold)) * 2;
    var fullROIPaymentNaira = fullROIPayment.toLocaleString();
    var inNaira = monthlyROI * 500;
    var roiNaira = inNaira.toLocaleString();
    $('.pay-alert').html(`
    <div>
        <h5 class="orange">Monthly Returns</h5>
        Capital : $${capital}/#${capitalNaira}
        <br>ROI: $${monthlyROI}/#${roiNaira} every month.<br> (6 Months) Your ROI + Capital : $${totalInvestmentROIDollar}/#${totalInvestmentNaira}
    </div>
    <br>
    <div>
        <h5 class="mt-2 mb-0 orange">6th Month Payment Option</h5> <br>100% ROI : $${fullROI} <br>
        Your ROI + Capital : $${fullROI * 2}/#${fullROIPaymentNaira}<br>
    </div>
    <p style="font-weight:300">Conversion Rate $1 : #500</p>
    <a class="text-center quote-btn mt-1 invest-now-btn" href="/invest_signup">Invest Now</a>`);
    // Set default values of Exclusive ROI
    var exclusiveROIMin = exclusivecapital.value * 1;
    var exclusiveROIMax = exclusivecapital.value * 2;
    var exclusiveROIMinNaira = exclusiveROIMin * 500;
    var exclusiveROIMaxNaira = exclusiveROIMax * 500;
    let nairaROIMin = exclusiveROIMinNaira.toLocaleString();
    let nairaROIMax = exclusiveROIMaxNaira.toLocaleString();
    $('.exclusive-pay-alert').html(`
    <h5 class="orange">6th Month Payment</h5>
    Minimum ROI Estimate 100 - 200% : $${exclusiveROIMin} & $${exclusiveROIMax}<br>
    ROI Target : 1000% <br>
    Naira Conversion : #${nairaROIMin} - #${nairaROIMax}.<br>
    <p style="font-weight:300">Conversion Rate $1 : #500</p>
    <p style="font-weight:200">Terms of this investment state that the profit from all the trading done within the duration will be split 50/50.<br>Contact Us for inquiries about this investment plan.</p>
    <a class="text-center quote-btn mt-3 invest-now-btn" href="/invest_signup">Invest Now</a>`);
    // Hide both ROI calculators
    $('#vip_calculator').hide();
    $('#exclusive_calculator').hide();

    // Hide invest button
    $('.invest-now-btn').hide();

    // display vip calculator when option clicked
    $('#vip_option').click(()=>{
        $('#exclusive_option').hide(400);
        $('#vip_calculator').show(1000);
    });
    // display exclusive calculator when option clicked
    $('#exclusive_option').click(()=>{
        $('#vip_option').hide(400);
        $('#exclusive_calculator').show(1000);
    });
    // hide both forms to show options
    $('.back_to_package').click(()=>{
        // Hide Both ROI calculators
        $('#vip_calculator').hide(400);
        $('#exclusive_calculator').hide(400);
        // Show both options
        $('#vip_option').show(1000);
        $('#exclusive_option').show(1000);
        vipcapital.value = 100;

        exclusivecapital.value = 1000; 
    });
    // Calculate ROI VIP Section
    $('#vipcalcbtn').click(()=>{
        if(vipcapital.value < 999){
            $('.pay-alert').fadeOut(800,()=>{
                // Set default value of monthly VIP ROI
                var capital = eval(vipcapital.value);
                var capitalNaira = capital * 500;
                var capitalNaira = capitalNaira.toLocaleString();
                var monthlyROI = capital * 0.15;
                var totalMonthsROI = eval(monthlyROI) * 6;
                var totalInvestmentROIDollar = eval(capital) + eval(totalMonthsROI);
                var totalInvestmentNaira = eval(totalInvestmentROIDollar) * 500;
                var totalInvestmentNaira = totalInvestmentNaira.toLocaleString();
                var fullROI = vipcapital.value * 1;
                var fullROIPayment = (fullROI + vipcapital.value) * 1;
                var fullROIPaymentNaira = fullROIPayment.toLocaleString();
                var inNaira = monthlyROI * 500;
                var roiNaira = inNaira.toLocaleString();
                $('.pay-alert').html(`
                <div>
                    <h5 class="orange">Monthly Returns</h5>
                    Capital : $${capital}/#${capitalNaira}
                    <br>ROI: $${monthlyROI}/#${roiNaira} every month.<br> (6 Months) Your ROI + Capital : $${totalInvestmentROIDollar}/#${totalInvestmentNaira}
                </div>
                <br>
                <div>
                    <h5 class="mt-2 mb-0 orange">6th Month Payment Option</h5> <br>100% ROI : $${fullROI} <br>
                    Your ROI + Capital : $${fullROI * 2}/#${fullROIPaymentNaira}<br>
                </div>
                <p style="font-weight:300">Conversion Rate $1 : #500</p>
                <a class="text-center quote-btn mt-1 invest-now-btn" href="/invest_signup">Invest Now</a>`);
                $('.pay-alert').fadeIn(800);
                $('.invest-now-btn').fadeIn(800);
            }
        )};
        if(vipcapital.value > 1000){
            $('.pay-alert').fadeOut(800,()=>{
                $('.pay-alert').html(`Capital greater that $1000 are reserved for our Exclusive Package.`);
                $('.pay-alert').fadeIn(800)
            });
        }
    })
    // Calculate ROI Exclusive Section
    $('#exclusivecalcbtn').click(()=>{
        if(exclusivecapital.value >= 1000){
            $('.exclusive-pay-alert').fadeOut(800,()=>{
                // Set default values of Exclusive ROI
                var exclusiveROIMin = exclusivecapital.value * 1;
                var exclusiveROIMax = exclusivecapital.value * 2;
                var exclusiveROIMinNaira = exclusiveROIMin * 500;
                var exclusiveROIMaxNaira = exclusiveROIMax * 500;
                let nairaROIMin = exclusiveROIMinNaira.toLocaleString();
                let nairaROIMax = exclusiveROIMaxNaira.toLocaleString();
                $('.exclusive-pay-alert').html(`
                <h5 class="orange">6th Month Payment</h5>
                Minimum ROI Estimate 100 - 200% : $${exclusiveROIMin} & $${exclusiveROIMax}<br>
                ROI Target : 1000% <br>
                Naira Conversion : #${nairaROIMin} - #${nairaROIMax}.<br>
                <p style="font-weight:300">Conversion Rate $1 : #500</p>
                <p style="font-weight:200">Terms of this investment state that the profit from all the trading done within the duration will be split 50/50.<br>Contact Us for inquiries about this investment plan.</p>
                <a class="text-center quote-btn mt-3 invest-now-btn" href="/invest_signup">Invest Now</a>`);
                $('.exclusive-pay-alert').fadeIn(800);
                $('.invest-now-btn').fadeIn(800);
            });
        }
        if(exclusivecapital.value < 1000){
            $('.exclusive-pay-alert').fadeOut(800,()=>{
                $('.exclusive-pay-alert').html(`Capital less that $1000 are reserved for our VIP Package.`);
                $('.exclusive-pay-alert').fadeIn(800);
            })
        };
    })
});