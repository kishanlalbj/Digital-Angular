var router = require('express').Router();
var nodemailer = require('nodemailer');
router.get('/',function(req,res) {
	res.send("API Worked..!!!");
})

router.post('/sendmail',function(req,res) {
	console.log(req.body);

	var to_mail = req.body.email;
	var from_mail = "kishanlal B J <kishanlalbj@gmail.com>";
	var subject = req.body.subject;
	var text_message = req.body.message;

		console.log('Credentials obtained, sending message...');

    // // Create a SMTP transporter object
	// 	let transporter = nodemailer.createTransport({
	// 		host: 'smtp.gmail.com',
	// 		port: '465',
	// 		secure: true,
	// 		auth: {
	// 			user: 'kishanlalbj@gmail.com',
	// 			pass: 'asdhemakishan'
	// 		}
	// 	});

	let transporter = nodemailer.createTransport({
		// host:'smtp-mail.outlook.com/owa/wipro',
		host: 'smtp.office365.com',
		port:'587',
		secureConnection:'false',
		tls: {
			ciphers:'SSLv3'
		 },
		auth: {
			user: 'ki352392@wipro.com',
			pass: 'gta@1995'
		}
	});

		// Message object
		let message = {
			from: 'Kishanlal B J <kishanlalbj@gmail.com>',
			to: to_mail,
			subject: subject,
			text: text_message
		};

		transporter.sendMail(message, (err, info) => {
			if (err) {
				console.log('Error occurred. ' + err.message);
				return process.exit(1);
			}
	
			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		});
	res.send(JSON.stringify({message:"Posted"}));
})

module.exports = router;