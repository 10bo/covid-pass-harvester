# 📱 COVID Pass Data Harvester

The UK COVID Status Check app is missing a feature - the ability to store the personal data contained in the QR code for a later date. This application provides establishments across the UK with an incredibly easy-to-use interface for viewing and exporting, en masse, personal QR code data such as:

* Name
* Date of birth
* Number of vaccine doses
* Type of vaccine (e.g. Pfizer, Moderna, AZ etc.)
* Vaccine issuer (e.g. NHS Scotland)
* COVID positivity status (not currently in use in the UK).

<!--This app has been tested with the NHS Scotland COVID Pass Verifier and NHS Scotland COVID Status apps.-->


**COVID QR passes are now required by law for entry to some establishments in areas of the UK. This now means that consumers are less likely to be reluctant to provide personal details to establishments who would otherwise not have access to this information.**

## Reasons to Collcet and Process QR Data

The QR data often contains personal information on consumers. With this information, it can be:

* **Sold to third parties** for advertisement purposes.
* **Used to build a profile on individual consumers**. This will improve the data stored in an establishment's database by adding data previously not stored (e.g. if an establishment runs a Guestlist entry service or online mailing list, it will now be possible to add date of birth, vaccine, and COVID positivity status data).
* **Stored more centrally** and combined with data from organisations (run by the same entity or otherwise) to help enforce a two-tier society.


## How To Run the App

Currently, QR data can be read but not stored - here are the steps:

1. Place a COVID status QR code into the `src/example-files/` directory.
1. Run `npm i` in the `src/` directory.
1. Run `node src/index.js` in the project root.

The output will be logged to the console.

## Prerequisites

* Node version >= 12

## To-do

* ✅ Implement ability to read QR code
* ✅ Implement decoding of QR code data to a JSON object
* ⏳ New project logo.
* ⏳ Create admin web interface.
* Implement ability to continuously scan QR code on client-side web app.
* Implement client COVID status indication on web UI.
* Implement server API endpoint which will accept QR data.
* Implement ability for server to send result to database (MySQL or SQLite).
* Improve popularity the project (social media etc.) and highlight benefits to businesses.
* Implement export to CSV & client-side filter.

## License

<a href="https://mit-license.org/">MIT</a>

# Sources

* **BBC - Covid-19: Enforceable vaccine passports in Scotland**: https://www.bbc.co.uk/news/uk-58948674
* **BBC - Wales NHS Covid pass: What is it and how do I get one?**: https://www.bbc.co.uk/news/uk-wales-politics-58600373