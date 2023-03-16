import {Directus} from '@directus/sdk';
// Connection

const directus = new Directus('http://api.collegementor.com/');

// Function
async function ExamsApplicationDate(examID) {
	const ExamApplicationDate = await directus


	// GraphQL Query
	.items('Exam_Application_Date')
	.readByQuery({
		filter:{'Exam':{'Exam_ID':{'_eq':examID}}},
		fields:[
			'Exam_App_Date',
			'Exam_Application_Date_Type.Exam_App_Date_Type_Name',
			'Description'
		]
	})
	// Ends

	.catch((err) => console.log(err))
	console.log(ExamApplicationDate.data)
}


ExamsApplicationDate(1);
