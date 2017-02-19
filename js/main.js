/* Custom JS goes here. */



// Document ready handler
$(document).on('ready', function(){
  // Form validation
    $('#order-form').validate({
        submitHandler: function(form) {
            // If form is valid by checking the rules below, submit it!
            form.submit();
        },
        rules: {
            // User Information Rules
            "your-name": {
                required: true,
                maxlength: 128
            },
            "your-address": {
                required: true,
                maxlength: 500
            },
            "your-city": {
                required: true
            },
            "your-state": {
                required: true,
                maxlength: 2
            },
            "your-zip": {
                required: true,
                maxlength: 5,
                digits: true,
                minlength: 5
            },
            // User Payment Information Rules
            "card-holder-name": {
                required: true,
                maxlength: 128
            },
            "card-number": {
                required: true,
                creditcard: true,
            },
            "expiry-year": {
                required: true
            },
            "cvv": {
                required: true,
                maxlength: 3,
                digits: true
            },
           // Additonal Information User Rules (Shipping and Comments)
            "shipping-method": {
                required: true
            },
            "comments": {
                required: false,
                maxlength: 800
            }
        }
    });
      // Tooltips
      // Adds a tootip to all glyphicons
    $('label span.glyphicon').tooltip();
});

  // State Abbreviation Validation 
  // Checks if input is equal any option in the array
  jQuery.validator.addMethod("states", function(value, element) {
  var states =  [ "AL", "AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID",
 "IL","IN","IA","KS","KY", "LA","ME","MD","MA","MI","MN","MS","MO","MT","NE",
 "NV","NH","NJ","NM","NY","NC","ND","OH", "OK","OR","PA","RI","SC","SD","TN",
 "TX","UT","VT","VA","WA","WV","WI","WY",];
  
  return this.optional( element ) || $.inArray(value,states) !== -1;
}, "Please use the two letter abbreviation for State");
