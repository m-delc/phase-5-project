require "faker"

# u1 = User.create!(username: "lol", first_name: "Larry", password: "lol" )

p1 = Person.create!(first_name: "Sam", bio: Faker::Lorem.sentence(word_count: 10), img: "https://denverbusinessheadshots.com/wp-content/uploads/2020/02/Denver-Business-Headshots-Denver-Headshots-Denver-Portrait-Photography-Denver-Portraits-Denver-Headshot-Colorado-Business-Headshots-148-256x256.jpg")
p2 = Person.create!(first_name: "Kiera", bio: Faker::Lorem.sentence(word_count: 10), img: "https://aacu.imgix.net/content/person/Headshot_Nicole-Fry.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=256&q=80&w=256")
p3 = Person.create!(first_name: "Charlie", bio: Faker::Lorem.sentence(word_count: 10), img: "https://denverbusinessheadshots.com/wp-content/uploads/2020/02/Denver-Business-Headshots-Denver-Headshots-Denver-Portrait-Photography-Denver-Portraits-Denver-Headshot-Colorado-Business-Headshots-102-256x256.jpg")
p4 = Person.create!(first_name: "Lisa", bio: Faker::Lorem.sentence(word_count: 10), img: "https://yourheadshot.rocks/wp-content/uploads/2021/06/Christina-Gressianu-Colorado-Headshot-Company.png")
p5 = Person.create!(first_name: "Bill", bio: Faker::Lorem.sentence(word_count: 10), img: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/60/square_thumb%402x.jpg")
p6 = Person.create!(first_name: "Alyssa", bio: Faker::Lorem.sentence(word_count: 10), img: "https://theoncologyinstitute.com/wp-content/uploads/2021/08/Chrystina-Castellon-MD.png")
p7 = Person.create!(first_name: "Joan", bio: Faker::Lorem.sentence(word_count: 10), img: "https://ascendindiana.com/uploads/Quote-Photos/_256x256_crop_center-center_none/Alexis-B_MIdwest-Associates.png")
p8 = Person.create!(first_name: "Lydia", bio: Faker::Lorem.sentence(word_count: 10), img: "https://theoncologyinstitute.com/wp-content/uploads/2021/03/Gol-Golshani-MD.png")
p9 = Person.create!(first_name: "Stuart", bio: Faker::Lorem.sentence(word_count: 10), img: "https://mdimentors.org/wp-content/uploads/2019/11/Dana-Williams-Headshot.png")
p10 = Person.create!(first_name: "Candice", bio: Faker::Lorem.sentence(word_count: 10), img: "https://iapp.org/media/headshots/0011P000014rBIyQAM.png")

PersonBudget.create!(person_id: p1.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p2.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p3.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p4.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p5.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p6.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p7.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p8.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p9.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
PersonBudget.create!(person_id: p10.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))

# Budget.create!(user_id: u1.id, weekOneGoals: Faker::Number.within(range: 101..301), weekTwoGoals: Faker::Number.within(range: 101..301), weekThreeGoals: Faker::Number.within(range: 101..301), weekFourGoals: Faker::Number.within(range: 101..301), weekFiveGoals: Faker::Number.within(range: 101..301), weekSixGoals: Faker::Number.within(range: 101..301))
