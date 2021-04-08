(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__["createTranslationDictionary"])(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context.urls); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;

    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]"); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["storeInstrument"])(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
            text: _this4.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }

    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
          enterPassword = _this$validationDicti.password,
          matchPassword = _this$validationDicti.password_match,
          invalidPassword = _this$validationDicti.invalid_password;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword), true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      currency_code = _ref2.currency_code,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBY2NvdW50IiwiY29udGV4dCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiJHN0YXRlIiwiJCIsIiRib2R5Iiwib25SZWFkeSIsIiRlZGl0QWNjb3VudEZvcm0iLCJjbGFzc2lmeUZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJHJlb3JkZXJGb3JtIiwiJGludm9pY2VCdXR0b24iLCJjb21wYXJlUHJvZHVjdHMiLCJ1cmxzIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJXaXNobGlzdCIsImxvYWQiLCJsZW5ndGgiLCJyZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbiIsImlzIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIm9uIiwibGVmdCIsIndpbmRvdyIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsImRhdGEiLCJvcGVuIiwiaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbiIsInJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uIiwiaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbiIsImluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24iLCJpbml0UmVvcmRlckZvcm0iLCJiaW5kRGVsZXRlQWRkcmVzcyIsImJpbmREZWxldGVQYXltZW50TWV0aG9kIiwiZXZlbnQiLCJtZXNzYWdlIiwiY3VycmVudFRhcmdldCIsImNvbmZpcm0iLCJwcmV2ZW50RGVmYXVsdCIsIiRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMiLCJzdWJtaXRGb3JtIiwiZmluZCIsInJlbW92ZSIsImVhY2giLCJpbmRleCIsInByb2R1Y3RDaGVja2JveCIsInByb2R1Y3RJZCIsInZhbCIsIiRpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhcHBlbmQiLCJzd2FsIiwiZmlyZSIsInRleHQiLCJzZWxlY3RJdGVtIiwiaWNvbiIsInZhbGlkYXRpb25Nb2RlbCIsInZhbGlkYXRpb24iLCJzdGF0ZVNlbGVjdG9yIiwiJHN0YXRlRWxlbWVudCIsImFkZHJlc3NWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJ0YXAiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiYWRkIiwiJGxhc3QiLCJzdGF0ZUNvdW50cnkiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiVmFsaWRhdG9ycyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdCIsImkiLCJlbGUiLCJwYXJzZUludCIsImF0dHIiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwidGFyZ2V0IiwiY3JlZGl0Q2FyZFR5cGUiLCJzaWJsaW5ncyIsImNzcyIsIkNDVmFsaWRhdG9ycyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJDQ0Zvcm1hdHRlcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsInNlcmlhbGl6ZUFycmF5Iiwib2JqIiwiaXRlbSIsInJlZk9iaiIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJzdGF0ZSIsInN0YXRlcyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50Iiwic3RvcmVJbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwicGF5bWVudE1ldGhvZHNVcmwiLCJnZW5lcmljX2Vycm9yIiwiZm9ybUVkaXRTZWxlY3RvciIsImVkaXRWYWxpZGF0b3IiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiZW50ZXJQYXNzd29yZCIsInBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwiaW52YWxpZFBhc3N3b3JkIiwiaW52YWxpZF9wYXNzd29yZCIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImN1cnJlbnRQYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5ib3hWYWxpZGF0b3IiLCJOdW1iZXIiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiUGFnZU1hbmFnZXIiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNyZWRpdGNhcmRzIiwiY2FyZCIsInBhcnNlIiwiZG9uZSIsImZhaWwiLCJwYXltZW50c1VybCIsInNob3BwZXJJZCIsInN0b3JlSGFzaCIsInZhdWx0VG9rZW4iLCJwcm92aWRlcl9pZCIsImN1cnJlbmN5X2NvZGUiLCJjcmVkaXRfY2FyZF9udW1iZXIiLCJuYW1lX29uX2NhcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInBvc3RhbF9jb2RlIiwiY29tcGFueSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwiZXhwaXJ5Iiwic3BsaXQiLCJhamF4IiwiZGF0YVR5cGUiLCJtZXRob2QiLCJjYWNoZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJtb250aCIsImV4cGlyeV95ZWFyIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsIkZvcm1hdHRlcnMiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxDb250ZXh0IiwiYWRkQ2xhc3MiLCJjb21wYXJlIiwiam9pbiIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJlbGVtZW50IiwiZ2V0IiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7QUFDakIsbUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsb0NBQU1BLE9BQU47QUFDQSxVQUFLQyxvQkFBTCxHQUE0QkMsb0dBQTJCLENBQUNGLE9BQUQsQ0FBdkQ7QUFDQSxVQUFLRyxNQUFMLEdBQWNDLENBQUMsQ0FBQywyQkFBRCxDQUFmO0FBQ0EsVUFBS0MsS0FBTCxHQUFhRCxDQUFDLENBQUMsTUFBRCxDQUFkO0FBSmlCO0FBS3BCOzs7O1NBRURFLE8sR0FBQSxtQkFBVTtBQUNOLFFBQU1DLGdCQUFnQixHQUFHQyw2RUFBWSxDQUFDLDhCQUFELENBQXJDO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRCw2RUFBWSxDQUFDLHlCQUFELENBQWpDO0FBQ0EsUUFBTUUsVUFBVSxHQUFHRiw2RUFBWSxDQUFDLHVCQUFELENBQS9CO0FBQ0EsUUFBTUcsa0JBQWtCLEdBQUdILDZFQUFZLENBQUMsNEJBQUQsQ0FBdkM7QUFDQSxRQUFNSSxrQkFBa0IsR0FBR0osNkVBQVksQ0FBQyxnQ0FBRCxDQUF2QztBQUNBLFFBQU1LLFlBQVksR0FBR0wsNkVBQVksQ0FBQyw2QkFBRCxDQUFqQztBQUNBLFFBQU1NLGNBQWMsR0FBR1YsQ0FBQyxDQUFDLHNCQUFELENBQXhCO0FBRUFXLDZFQUFlLENBQUMsS0FBS2YsT0FBTCxDQUFhZ0IsSUFBZCxDQUFmLENBVE0sQ0FXTjs7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixLQUFLakIsT0FBTCxDQUFhaUIsb0JBQXpDLENBWk0sQ0FjTjs7QUFDQUMscURBQVEsQ0FBQ0MsSUFBVCxDQUFjLEtBQUtuQixPQUFuQjs7QUFF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Q0UsYUFBTixDQUFvQmlOLE9BQXhCLEVBQWlDO0FBQzdCbkIsc0JBQWdCLENBQUNVLGNBQUQsRUFBaUJPLE9BQWpCLENBQWhCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hyQixzQkFBZ0IsQ0FBQ2MsY0FBRCxFQUFpQk8sT0FBakIsQ0FBaEI7QUFDSDs7QUFFRGYsb0JBQWdCLENBQUNRLGNBQUQsRUFBaUJRLG1CQUFqQixFQUFzQ2QsVUFBdEMsQ0FBaEI7QUFDSCxHQVhEO0FBYUF6TyxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQixFQUFWLENBQWEsUUFBYixFQUF1Qix3QkFBdkIsRUFBaUQsVUFBQWlCLEtBQUssRUFBSTtBQUN0RCxRQUFNb04sS0FBSyxHQUFHelAsQ0FBQyxDQUFDcUMsS0FBSyxDQUFDRSxhQUFQLENBQWY7QUFDQSxRQUFNbU4saUJBQWlCLEdBQUdELEtBQUssQ0FBQzdNLElBQU4sQ0FBVyxvQ0FBWCxDQUExQjs7QUFFQSxRQUFJOE0saUJBQWlCLENBQUMxTyxNQUFsQixJQUE0QixDQUFoQyxFQUFtQztBQUMvQjJPLG1FQUFjLENBQUMsa0RBQUQsQ0FBZDtBQUNBdE4sV0FBSyxDQUFDSSxjQUFOO0FBQ0g7QUFDSixHQVJEO0FBVUF6QyxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQixFQUFWLENBQWEsT0FBYixFQUFzQixxQkFBdEIsRUFBNkMsWUFBTTtBQUMvQyxRQUFNd08sb0JBQW9CLEdBQUc1UCxDQUFDLENBQUMsTUFBRCxDQUFELENBQVU0QyxJQUFWLENBQWUsb0NBQWYsQ0FBN0I7O0FBRUEsUUFBSWdOLG9CQUFvQixDQUFDNU8sTUFBckIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDbEMyTyxtRUFBYyxDQUFDLGtEQUFELENBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7QUFRSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay45LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XHJcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XHJcbmltcG9ydCB7XHJcbiAgICBjbGFzc2lmeUZvcm0sXHJcbiAgICBWYWxpZGF0b3JzLFxyXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQsXHJcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXHJcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCB7IGNyZWRpdENhcmRUeXBlLCBzdG9yZUluc3RydW1lbnQsIFZhbGlkYXRvcnMgYXMgQ0NWYWxpZGF0b3JzLCBGb3JtYXR0ZXJzIGFzIENDRm9ybWF0dGVycyB9IGZyb20gJy4vY29tbW9uL3BheW1lbnQtbWV0aG9kJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkYWRkcmVzc0Zvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGluYm94Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWluYm94LWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRwYXltZW50TWV0aG9kRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJHJlb3JkZXJGb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJlb3JkZXItZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XHJcblxyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcblxyXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSB0ZW1wbGF0ZVxyXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XHJcblxyXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyB3aXNoIGxpc3QgSlNcclxuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XHJcblxyXG4gICAgICAgIGlmICgkZWRpdEFjY291bnRGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcclxuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGludm9pY2VCdXR0b24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRpbnZvaWNlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggLyAyIC0gNDUwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDIgLSAzMjA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAkaW52b2ljZUJ1dHRvbi5kYXRhKCdwcmludEludm9pY2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdvcmRlckludm9pY2UnLCBgd2lkdGg9OTAwLGhlaWdodD02NTAsbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sc2Nyb2xsYmFycz0xYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRhZGRyZXNzRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcclxuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGluYm94Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkYWNjb3VudFJldHVybkZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRwYXltZW50TWV0aG9kRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHJlb3JkZXJGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlQWRkcmVzcygpO1xyXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcclxuICAgICAqL1xyXG4gICAgYmluZERlbGV0ZUFkZHJlc3MoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlQWRkcmVzcycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmREZWxldGVQYXltZW50TWV0aG9kKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1wYXltZW50LW1ldGhvZF0nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVQYXltZW50TWV0aG9kJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSkge1xyXG4gICAgICAgICRyZW9yZGVyRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBsZXQgc3VibWl0Rm9ybSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzLmVhY2goKGluZGV4LCBwcm9kdWN0Q2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuc2VsZWN0SXRlbSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtLCB0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcclxuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0ICRsYXN0O1xyXG5cclxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxyXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihhZGRyZXNzVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRhZGRyZXNzRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pIHtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkYWNjb3VudFJldHVybkZvcm0uZGF0YSgnYWNjb3VudFJldHVybkZvcm1FcnJvcicpO1xyXG5cclxuICAgICAgICAkYWNjb3VudFJldHVybkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1TdWJtaXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgd2UgZmluZCBhIG5vbi16ZXJvIHZhbHVlIGluIHRoZSBkcm9wZG93biBmb3IgcXVhbnRpdHlcclxuICAgICAgICAgICAgJCgnW25hbWVePVwicmV0dXJuX3F0eVwiXScsICRhY2NvdW50UmV0dXJuRm9ybSkuZWFjaCgoaSwgZWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU3VibWl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1TdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSkge1xyXG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjbGFzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5sYXN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MxLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY291bnRyeS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlc2VsZWN0XCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb3VudHJ5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgcHJlZml4OiBcIiR7dGhpcy5jb250ZXh0LmNob29zZUNvdW50cnlMYWJlbH1cIiB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNzdGF0ZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuc3RhdGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bvc3RhbF9jb2RlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5wb3N0YWxDb2RlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtLCB0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RTZWxlY3RvciA9ICdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nO1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6IGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXWApO1xyXG5cclxuICAgICAgICBsZXQgJGxhc3Q7XHJcbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxyXG4gICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxyXG4gICAgICAgIGxldCBjYXJkVHlwZTtcclxuICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGNhcmRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nW2FsdD1cIiR7Y2FyZFR5cGV9XCJdYCkuc2libGluZ3MoKS5jc3MoJ29wYWNpdHknLCAnLjInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCB2YWxpZGF0aW9uXHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWAsIHRoaXMuY29udGV4dC5jcmVkaXRDYXJkTnVtYmVyKTtcclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0RXhwaXJhdGlvblZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWAsIHRoaXMuY29udGV4dC5leHBpcmF0aW9uKTtcclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwibmFtZV9vbl9jYXJkXCJdYCwgdGhpcy5jb250ZXh0Lm5hbWVPbkNhcmQpO1xyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDdnZWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImN2dlwiXWAsIHRoaXMuY29udGV4dC5jdnYsICgpID0+IGNhcmRUeXBlKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIGZvcm1hdFxyXG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApO1xyXG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRFeHBpcmF0aW9uRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gKTtcclxuXHJcbiAgICAgICAgLy8gQmlsbGluZyBhZGRyZXNzIHZhbGlkYXRpb25cclxuICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBmaW5hbCBmb3JtIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZm9ybSBkYXRhIGFuZCByZWR1Y2UgaXQgdG8gb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gXy5yZWR1Y2UoJHBheW1lbnRNZXRob2RGb3JtLnNlcmlhbGl6ZUFycmF5KCksIChvYmosIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZPYmogPSBvYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmT2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZPYmo7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGNvdW50cnkgYW5kIHN0YXRlIGNvZGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBfLmZpbmQodGhpcy5jb250ZXh0LmNvdW50cmllcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuY291bnRyeSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvdW50cnkgJiYgXy5maW5kKGNvdW50cnkuc3RhdGVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnlfY29kZSA9IGNvdW50cnkgPyBjb3VudHJ5LmNvZGUgOiBkYXRhLmNvdW50cnk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXRlX29yX3Byb3ZpbmNlX2NvZGUgPSBzdGF0ZSA/IHN0YXRlLmNvZGUgOiBkYXRhLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgSW5zdHJ1bWVudFxyXG4gICAgICAgICAgICAgICAgZGF0YS5kZWZhdWx0X2luc3RydW1lbnQgPSAhIWRhdGEuZGVmYXVsdF9pbnN0cnVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNyZWRpdCBjYXJkXHJcbiAgICAgICAgICAgICAgICBzdG9yZUluc3RydW1lbnQodGhpcy5jb250ZXh0LCBkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNvbnRleHQucGF5bWVudE1ldGhvZHNVcmw7XHJcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmdlbmVyaWNfZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0sIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcclxuICAgICAgICBjb25zdCBlZGl0VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiRW1haWxBZGRyZXNzXCJdYDtcclxuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlBhc3N3b3JkXCJdYDtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ3VycmVudFBhc3N3b3JkXCJdYDtcclxuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgb25seSBoYW5kbGVzIHRoZSBjdXN0b20gZmllbGRzLCBzdGFuZGFyZCBmaWVsZHMgYXJlIGFkZGVkIGJlbG93XHJcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGVkaXRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkudmFsaWRfZW1haWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQsIGludmFsaWRfcGFzc3dvcmQ6IGludmFsaWRQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICBlZGl0VmFsaWRhdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCBpbnZhbGlkUGFzc3dvcmQpLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkY3VycmVudFBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjdXJyZW50UGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSAnJyAmJiAkcGFzc3dvcmRFbGVtZW50LnZhbCgpICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY3VycmVudFBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfZmlyc3RuYW1lJ11gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2xhc3RuYW1lJ11gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5sYXN0TmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGluYm94VmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHNlbGVjdFtuYW1lPVwibWVzc2FnZV9vcmRlcl9pZFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck9yZGVyTnVtLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFtuYW1lPVwibWVzc2FnZV9zdWJqZWN0XCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJTdWJqZWN0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSB0ZXh0YXJlYVtuYW1lPVwibWVzc2FnZV9jb250ZW50XCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJNZXNzYWdlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkaW5ib3hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluYm94VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBjcmVkaXRjYXJkcyBmcm9tICdjcmVkaXRjYXJkcyc7XHJcblxyXG4vKipcclxuICogT21pdCBudWxsIG9yIGVtcHR5IHN0cmluZyBwcm9wZXJ0aWVzIG9mIG9iamVjdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5jb25zdCBvbWl0TnVsbFN0cmluZyA9IG9iaiA9PiB7XHJcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XHJcblxyXG4gICAgJC5lYWNoKHJlZk9iaiwgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZWZPYmpba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVmT2JqO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBoZWFkZXJcclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBib2R5XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmFpbCBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgdW5zdWNjZXNzZnVsIHJlc3BvbnNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcclxuICAgIC8vIEhvc3RuYW1lLCBJZHMgJiBUb2tlblxyXG4gICAgcGF5bWVudHNVcmwsXHJcbiAgICBzaG9wcGVySWQsXHJcbiAgICBzdG9yZUhhc2gsXHJcbiAgICB2YXVsdFRva2VuLFxyXG59LCB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgLy8gUHJvdmlkZXIgSW5mb1xyXG4gICAgcHJvdmlkZXJfaWQsXHJcbiAgICBjdXJyZW5jeV9jb2RlLFxyXG5cclxuICAgIC8vIEluc3RydW1lbnQgRGV0YWlsc1xyXG4gICAgY3JlZGl0X2NhcmRfbnVtYmVyLFxyXG4gICAgZXhwaXJhdGlvbixcclxuICAgIG5hbWVfb25fY2FyZCxcclxuICAgIGN2dixcclxuICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcclxuXHJcbiAgICAvLyBCaWxsaW5nIEFkZHJlc3NcclxuICAgIGFkZHJlc3MxLFxyXG4gICAgYWRkcmVzczIsXHJcbiAgICBjaXR5LFxyXG4gICAgcG9zdGFsX2NvZGUsXHJcbiAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxyXG4gICAgY291bnRyeV9jb2RlLFxyXG4gICAgY29tcGFueSxcclxuICAgIGZpcnN0X25hbWUsXHJcbiAgICBsYXN0X25hbWUsXHJcbiAgICBlbWFpbCxcclxuICAgIHBob25lLFxyXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG59LCBkb25lLCBmYWlsKSA9PiB7XHJcbiAgICBjb25zdCBleHBpcnkgPSBleHBpcmF0aW9uLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IGAke3BheW1lbnRzVXJsfS9zdG9yZXMvJHtzdG9yZUhhc2h9L2N1c3RvbWVycy8ke3Nob3BwZXJJZH0vc3RvcmVkX2luc3RydW1lbnRzYCxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHZhdWx0VG9rZW4sXHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGluc3RydW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgICAgICAgICAgIGNhcmRob2xkZXJfbmFtZTogbmFtZV9vbl9jYXJkLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKGNyZWRpdF9jYXJkX251bWJlciksXHJcbiAgICAgICAgICAgICAgICBleHBpcnlfbW9udGg6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSxcclxuICAgICAgICAgICAgICAgIGV4cGlyeV95ZWFyOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl92YWx1ZTogY3Z2LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3M6IG9taXROdWxsU3RyaW5nKHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczIsXHJcbiAgICAgICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob25lLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcHJvdmlkZXJfaWQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcclxuICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcclxuICAgICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgICAgLmRvbmUoZG9uZSlcclxuICAgICAgICAuZmFpbChmYWlsKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtYXR0ZXJzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSBjcmVkaXRjYXJkcy5jYXJkLmZvcm1hdChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqL1xyXG4gICAgc2V0RXhwaXJhdGlvbkZvcm1hdDogZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh3aGljaCA9PT0gOCAmJiAvLiooXFwvKSQvLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMS05XVxcL3xbMi05XSkkL2csICcwJDEvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMC0xXSkoWzMtOV0pJC9nLCAnMCQxLyQyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkoWzAtOV17Mn0pJC9nLCAnJDEvJDInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcZFxcL118XltcXC9dKiQvZywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBleHBpcmF0aW9uIGRhdGVcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyeSA9IHZhbC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgIWNyZWRpdGNhcmRzLmV4cGlyYXRpb24uaXNQYXN0KGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSwgY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBuYW1lIG9uIGNhcmRcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXROYW1lT25DYXJkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3Z2XHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSB7YW55fSBjYXJkVHlwZSBUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIHR5cGVcclxuICAgICAqL1xyXG4gICAgc2V0Q3Z2VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSwgY2FyZFR5cGUpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY3ZjLmlzVmFsaWQodmFsLCB0eXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcblxyXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xyXG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XHJcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcclxuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xyXG5cclxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9