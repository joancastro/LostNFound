describe('Test for loginValidation.js', function () {
    context("Both User and PW are correct", function () {
        it("Should return True", function () {
            let user = "admin";
            let pw = "password";

            chai.assert.isTrue(validate(user, pw));
        });
    });

    context("Both User and PW are incorrect", function () {
        it("Should return False", function () {
            let user = "admin2";
            let pw = "password2";

            chai.assert.isFalse(validate(user, pw));
        });
    });

    context("User is correct and PW is incorrect", function () {
        it("Should return False", function () {
            let user = "admin";
            let pw = "password2";

            chai.assert.isFalse(validate(user, pw));
        });
    });

    context("User is incorrect and PW is correct", function () {
        it("Should return False", function () {
            let user = "admin2";
            let pw = "password";

            chai.assert.isFalse(validate(user, pw));
        });
    });

});