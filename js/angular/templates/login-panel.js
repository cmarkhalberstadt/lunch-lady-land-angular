<script type="text/ng-template" id="login-panel.html">
  <li id="login_dropdown" class="dropdown" style="display: block;" data-ng-controller="UserLoginController as userLoginCtrl">
	<a href="#" class="dropdown-toggle login_highlight" data-toggle="dropdown">Login <b class="caret"></b></a>
	<div class="dropdown-menu login_highlight">
		<!-- START : Login Form -->
		<form id="app_login_form" name="appLoginForm" data-ng-class="{ 'hidden' : showNewAccountForm }" data-ng-submit="login()">
			<div data-ng-show="error" class="alert alert-danger">{{error}}</div>
			<div class="form-group">
				<input id="login_user" name="username" data-ng-model="username" class="form-control" type="text" value="" placeholder="User Name" required />
				<b class="fa fa-user"></b>
				<span ng-show="appLoginForm.username.$dirty && appLoginForm.username.$error.required" class="help-block">Username is required</span>
			</div>
			<div class="form-group">
				<input id="login_pw" name="password" data-ng-model="password" class="form-control" type="password" value="" placeholder="Password" required />
				<b class="fa fa-lock"></b>
				<span data-ng-show="appLoginForm.password.$dirty && appLoginForm.password.$error.required" class="help-block">Password is required</span>
				<a class="">Forgot Password?</a>
			</div>
			<input id="login_submit" class="form-control" type="submit" value="Login" />
			<div class="input-group">
				<a id="create_new_acct_link" data-ng-click="showNewAccountForm = !showNewAccountForm">Create New Account</a>
			</div>
		</form>
		<!-- END : Login Form -->
		<!-- START : Account Creation Form -->
		<form id="app_create_account_form" data-ng-class="{ 'hidden' : !showNewAccountForm }">
			<h2>- Account Information -</h2>
			<div class="row">
				<div class="col-xs-12">
					<input id="createAcct_email" name="" class="form-control" type="text" value="" placeholder="E-mail Address"/>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<input id="createAcct_pw" name="" class="form-control" type="password" value="" placeholder="Password"/>
				</div>
				<div class="col-xs-12 col-sm-6">
					<input id="createAcct_repeatPw" name="" class="form-control" type="password" value="" placeholder="Repeat Password"/>
				</div>
			</div>
			<h2>- Contact Information -</h2>
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<input id="createAcct_fName" name="" class="form-control" type="text" value="" placeholder="First Name"/>
				</div>
				<div class="col-xs-12 col-sm-6">
					<input id="createAcct_lName" name="" class="form-control" type="text" value="" placeholder="Last Name"/>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<input id="createAcct_phone" name="" class="form-control" type="text" value="" placeholder="Phone #"/>
				</div>
			</div>
			<h2>- Location -</h2>
			<div class="row">
				<div class="col-xs-12">
					<select id="createAcct_location" name="" class="form-control">
						<!-- Swap these out with dynamic locations -->
						<option>Selection a Delivery Location</option>
						<option>Location 1</option>
						<option>Location 2</option>
						<option>Location 3</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<input id="createAcct_submit" class="form-control" type="submit" value="Create Account"/>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<a id="createAcct_cancel" class="form-control" data-ng-click="showNewAccountForm = !showNewAccountForm">Cancel</a>
				</div>
			</div>
		</form>
		<!-- END : Account Creation Form -->
	</div>
  </li>
</script>