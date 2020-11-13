$(document).ready(
    function () {
        $("#submit_details").click(submitDetails);
        $("#submit_address").click(submitAddress);

        function submitDetails(event) {
            event.preventDefault();
            //This just hides the pizza box and shows the delivery box.
            $("#pizza_details").hide();
            $("#pizza_delivery").show();
        }

        function submitAddress(event) {
            event.preventDefault();

            var ingredients = 0;
            var checkedBoxes= $("input[name=toppings]:checked");

            checkedBoxes.each(function() {
                ingredients += $(this).data("price");
            });

            //Price variables
            var selectedRadioButton = $("input[name=size]:checked");
            var size = selectedRadioButton.data("price");
            var delivery = 2;
            var subtotal = ingredients+size;
            var tax = subtotal * .051;
            var total = subtotal + tax + delivery;

            //Customer info variables
            var name = $("#delivery_1").val();
            var address = $("#delivery_2").val();
            var phone = $("#delivery_3").val();

            $("#pizza_delivery").hide();
            $("#pizza_confirmation").show();

            //show prices
            $("#subtotal").text("Subtotal: $"+subtotal.toFixed(2));
            $("#calculated_tax").text("Tax: $"+tax.toFixed(2));
            $("#delivery_fee").text("Delivery: $"+delivery.toFixed(2));
            $("#total").text("Total: $"+total.toFixed(2));

            //show address
            $("#customer_name").text(name);
            $("#customer_address").text(address);
            $("#customer_phone").text(phone);
        }
    });