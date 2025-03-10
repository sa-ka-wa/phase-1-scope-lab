require("./helpers.js");

var customerName = "bob";

describe("Fix the Scope", function () {
  describe("declare customerName to be bob in global scope", function () {
    it("returns the customerName", function () {
      expect(window.customerName).to.equal("bob");
    });
  });

  function upperCaseCustomerName() {
    return (customerName = customerName.toUpperCase());
  }

  describe("upperCaseCustomerName()", function () {
    it("modifies the customerName variable", function () {
      expect(window.customerName).to.equal("bob");

      upperCaseCustomerName();

      expect(window.customerName).to.equal("BOB");
    });
  });

  function setBestCustomer() {
    bestCustomer = "not bob";
  }

  describe("setBestCustomer()", function () {
    it("setBestCustomer", function () {
      expect(window.bestCustomer).to.equal(undefined);

      setBestCustomer();

      expect(window.bestCustomer).to.equal("not bob");
    });
  });

  function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
  }

  describe("overwriteBestCustomer()", function () {
    it("overwrites the best customer", function () {
      overwriteBestCustomer("maybe bob");

      expect(window.bestCustomer).to.equal("maybe bob");
    });
  });

  const leastFavoriteCustomer = "bob";

  describe("changeLeastFavoriteCustomer()", function () {
    it("unsuccessfully tries to reassign the least favorite customer", function () {
      expect(changeLeastFavoriteCustomer).to.throw(
        "Assignment to constant variable."
      );
    });
  });
});
