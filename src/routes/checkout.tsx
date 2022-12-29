import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { CountryField } from "src/components/CountryField";
import type { DeliveryOptionInterface } from "src/components/DeliveryStep";
import { DeliveryStep } from "src/components/DeliveryStep";
import { FieldSet } from "src/components/FieldSet";
import { FormRow } from "src/components/FormRow";
import { PaymentField } from "src/components/PaymentField";
import { SelectField } from "src/components/SelectField";
import { Sidebar } from "src/components/Sidebar";
import { TextField } from "src/components/TextField";
import { COUNTRIES } from "src/data/countries";

const deliveryOptionsNL = [
  {
    id: "dhl-home-delivery",
    title: "DHL home delivery",
    description: "1-2 business days",
    price: 5,
  },
  {
    id: "dpd-home-delivery",
    title: "DPD home delivery",
    description: "1-2 business days",
    price: 6.5,
  },
];

const paymentOptionsNL = [
  "./banks/ideal.svg",
  "./banks/klarna.svg",
  "./banks/paypal.svg",
];

const deliveryOptionsLT = [
  {
    id: "lpexpress-home-delivery",
    title: "LP Express home delivery",
    description: "1-2 business days",
    price: 3,
  },
  {
    id: "omniva-home-delivery",
    title: "Omniva home delivery",
    description: "1-2 business days",
    price: 3.5,
  },
];

const paymentOptionsLT = [
  "./banks/swedbank.svg",
  "./banks/seb.svg",
  "./banks/siauliu-bankas.svg",
  "./banks/luminor.svg",
  "./banks/citadele.svg",
  "./banks/medicinos-bankas.svg",
  "./banks/paysera.svg",
];

export default function CheckoutPage() {
  const [country, setCountry] = useState("NL");

  const [payment, setPayment] = useState(paymentOptionsNL[0]);

  const [ideal, setIdeal] = useState("");

  const [delivery, setDelivery] = useState<DeliveryOptionInterface>(
    deliveryOptionsNL[0]
  );

  useEffect(() => {
    setDelivery(country === "NL" ? deliveryOptionsNL[0] : deliveryOptionsLT[0]);
  }, [country]);

  useEffect(() => {
    setPayment(country === "NL" ? paymentOptionsNL[0] : paymentOptionsLT[0]);
  }, [country]);

  return (
    <div className="w-full">
      <main className="flex min-h-screen bg-white">
        <section className="flex w-full justify-center md:w-3/5 md:justify-end">
          <div className="flex w-full max-w-screen-md flex-col px-6 pt-14 md:px-8 lg:px-16">
            <div className="mb-12">
              <Link
                to="/"
                className="text-4xl font-semibold uppercase tracking-[0.25rem]"
              >
                Zephyr
              </Link>
            </div>

            <div className="flex flex-col">
              <FieldSet label="Contact information">
                <TextField label="Full name" name="fullName" />

                <CountryField
                  label="Country"
                  name="country"
                  selectedCountry={country}
                  onCountryChange={setCountry}
                  countries={Object.entries(COUNTRIES).map(
                    ([code, country]) => ({
                      label: country.name,
                      value: code,
                    })
                  )}
                />

                <FormRow>
                  <TextField label="Email" name="email" type="email" />
                  <TextField
                    label="Phone number"
                    name="phoneNumber"
                    placeholder={
                      country === "NL" ? "06 00 00 00 00" : "8 600 00 000"
                    }
                    type="tel"
                  />
                </FormRow>
              </FieldSet>

              <DeliveryStep
                selectedOption={delivery}
                setSelectedOption={setDelivery}
                deliveryOptions={
                  country === "NL" ? deliveryOptionsNL : deliveryOptionsLT
                }
              />

              {country === "NL" && (
                <FieldSet label="Shipping address">
                  <FormRow>
                    <TextField
                      label="Postal code"
                      name="postalCode"
                      placeholder="1234AB"
                    />
                    <TextField label="House number" name="houseNumber" />
                  </FormRow>

                  <TextField label="Address" name="address" />
                </FieldSet>
              )}

              {country === "LT" && (
                <FieldSet label="Delivery information">
                  <TextField label="Address" name="address" />

                  <FormRow>
                    <TextField
                      label="Postal code"
                      name="postalCode"
                      placeholder="123456"
                    />
                    <TextField label="City" name="city" />
                  </FormRow>
                </FieldSet>
              )}
            </div>

            {country === "NL" && (
              <FieldSet label="Payment method">
                <PaymentField
                  selected={payment}
                  onSelect={setPayment}
                  methods={paymentOptionsNL}
                />
                {payment === "./banks/ideal.svg" && (
                  <SelectField
                    label="Bank"
                    name="bank"
                    options={[
                      { value: "abn-amro", label: "ABN AMRO" },
                      { value: "asn-bank", label: "ASN Bank" },
                      { value: "bunq", label: "Bunq" },
                      { value: "ing", label: "ING" },
                      { value: "knab", label: "Knab" },
                      { value: "rabo", label: "Rabobank" },
                      { value: "regio", label: "RegioBank" },
                      { value: "revolut", label: "Revolut" },
                      { value: "sns", label: "SNS Bank" },
                      { value: "triodos", label: "Triodos Bank" },
                      { value: "van-lanschot", label: "Van Lanschot" },
                    ]}
                    selectedOption={ideal}
                    onOptionChange={setIdeal}
                  />
                )}
              </FieldSet>
            )}

            {country === "LT" && (
              <FieldSet label="Payment method">
                <PaymentField
                  selected={payment}
                  onSelect={setPayment}
                  methods={paymentOptionsLT}
                />
              </FieldSet>
            )}

            <div className="flex flex-grow flex-col justify-end">
              <label className="mb-4 flex items-start text-sm font-medium text-gray-600">
                <input
                  type="checkbox"
                  name="isCompany"
                  className="mr-2 rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-offset-0"
                />
                <span className="-mt-1">
                  By checking this box, I confirm that I have read and agree to
                  the{" "}
                  <a href="#" className="text-blue-800 hover:underline">
                    terms of service
                  </a>{" "}
                  for this website.
                </span>
              </label>

              <button
                type="button"
                className="group mb-14 flex w-full items-center justify-center rounded-md bg-indigo-700 py-3 font-medium text-white"
              >
                Pay 50.00€
              </button>
            </div>
          </div>
        </section>
        <Sidebar selectedDelivery={delivery} />
      </main>
    </div>
  );
}
