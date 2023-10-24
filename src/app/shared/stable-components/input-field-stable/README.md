# Custom Input field

<div class="" style="margin-left: 50px;margin-top: 100px;">

    <!-- Text -->
    <input-stable placeholder="Customer name" label="Customer Name" labelPosition="fixed" [required]="true"
        minlength="5" maxlength="5" type="text"></input-stable>


    <!-- OTP -->
    <input-stable placeholder="XXXX" label="OTP" labelPosition="float" [required]="true" minlength="4" maxlength="4"
        type="number"></input-stable>


    <!-- Email -->
    <input-stable placeholder="Email Address" labelPosition="fixed" label="Email" [required]="true"
        type="email"></input-stable>

    <!-- Mobile Number -->
    <input-stable placeholder="Mobile Number" labelPosition="float" label="Mobile Number" [required]="true"
        type="mobile"></input-stable>

    <!--Textarea -->
    <input-stable placeholder="Comments" labelPosition="float" label="Comments" [required]="false" type="textarea"
        rows="10" cols="100"></input-stable>

    <!--Password -->
    <input-stable placeholder="Password" labelPosition="float" label="Password" [required]="true"
        type="password" minlength="8" maxlength="25"></input-stable>

</div>
