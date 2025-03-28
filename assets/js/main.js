document.addEventListener("DOMContentLoaded", function(){
  const selectors = {
    MESSURE: '.js-messure',
    METRIC_FIELDS: '.js-metric-fields',
    IMPERIAL_FIELDS: '.js-imperial-fields',
  };
  const classes = {
    HIDDEN: 'hidden'
  }

  const messure = document.querySelector(selectors.MESSURE);
  const metricFields = document.querySelector(selectors.METRIC_FIELDS);
  const imperialFields = document.querySelector(selectors.IMPERIAL_FIELDS);
  
  messure.addEventListener('change', function () {
    const selectedValue = document.querySelector('input[name="messure"]:checked').value;
    
    if (selectedValue === 'metric') {

      metricFields.classList.remove(classes.HIDDEN);
      imperialFields.classList.add(classes.HIDDEN);
    } else if (selectedValue === 'imperial') {
      metricFields.classList.add(classes.HIDDEN);
      imperialFields.classList.remove(classes.HIDDEN);
    }
  });

})
