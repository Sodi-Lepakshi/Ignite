function showTab(tabName) {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');   
}

function showJobDetails(company) {
    let jobDetails = {
        google: {
            company: 'Google',
            title: 'Data Science, Data Engineer',
            about: 'Google is a global technology company specializing in Internet-related services and products.',
            qualifications: 'Experience in data science and engineering, proficiency in Python and SQL.'
        },
        tiktok: {
            company: 'TikTok',
            title: 'Data Analyst, Product Analyst',
            about: 'TikTok is a leading platform for short-form mobile videos. Our mission is to inspire creativity and bring joy.',
            qualifications: 'Experience in data analysis and product management, strong analytical skills.'
        },
        youtube: {
            company: 'YouTube',
            title: 'Senior Software Engineer',
            about: 'YouTube is the world\'s most popular online video community.',
            qualifications: 'Extensive experience in software development, team management skills, proficiency in Java and C++.'
        }
    };

    document.getElementById('company-name').innerText = jobDetails[company].company;
    document.getElementById('job-title').innerText = jobDetails[company].title;
    document.getElementById('about-company').innerText = jobDetails[company].about;
    document.getElementById('qualifications').innerText = jobDetails[company].qualifications;
}
