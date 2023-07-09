// // // const url = 'https://indeed12.p.rapidapi.com/job/b762b8d1132bd276';
// // // const options = {
// // //   method: 'GET',
// // //   headers: {
// // //     'X-RapidAPI-Key': '07a7eecbbamsh04b5e9dd4dfc3edp1dbe6ajsn56bdbbf5520d',
// // //     'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
// // //   }
// // // };

// // // async function fetchData() {
// // //   try {
// // //     const response = await fetch(url, options);
// // //     const result = await response.text();
// // //     console.log(result);
// // //     const responseObj = JSON.parse(result);
// // //     const jsonString = JSON.stringify(responseObj, null, 2);
// // //     const blob = new Blob([jsonString], { type: 'application/json' });
// // //     const url2 = URL.createObjectURL(blob);
// // //     const link = document.createElement('a');
// // //     link.href = url2;
// // //     link.download = 'response.json';
// // //     link.click();
// // //   } catch (error) {
// // //     console.error(error);
// // //   }
// // // }

// // // fetchData();


// const url = 'https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details3';
// const options = {
//   method: 'POST',
//    headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '07a7eecbbamsh04b5e9dd4dfc3edp1dbe6ajsn56bdbbf5520d',
//     'X-RapidAPI-Host': 'linkedin-profiles-and-company-data.p.rapidapi.com'
//   },
//   data: {
//     profile_id: 'williamhgates',
//     profile_type: 'personal',
//     contact_info: false,
//     recommendations: false,
//     related_profiles: false
//   }
// };

// async function fetchData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//     const responseObj = JSON.parse(result);
//     const jsonString = JSON.stringify(responseObj, null, 2);
//     const blob = new Blob([jsonString], { type: 'application/json' });
//     const fileUrl = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.download = 'response2.json';
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(fileUrl);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();
