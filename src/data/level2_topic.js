const data = [
    {
        stt: "9.4",
        q: "Is your name important to you?",
        a: "Yes, my name is important to me. Names can make a strong impression on people",
        ya: "Well you know, I don’t think Name is important to me, For me Name is just the way of identification"
    },

    {
        stt: "9.5",
        q: "How old are you?",
        a: "I’m 27 years old. I was born on September ninth. 1989",
        ya: "I’m 23 years old. I was born in on December nineteenth, 1997(nineteenth, nineteenth seven)",
    },
    {
        stt: "9.6",
        q: "Where do you come from?",
        a: "I was born in DN city, VietNam.",
        ya: "I’m originally from Buon Me Thuot City.",
    },

    {
        stt: "9.7",
        q: "How long have you lived in Ho Chi Minh City?",
        a: "I’ve lived here since 1999",
        ya: "I’ve lived here since 2015 (two thousand and fifteen), when I got to college",

    },

    {
        stt: "10.1",
        q: "Tell me about your typical day in your life",
        a: 'I have a hectic lifestyle. During the week, I usually get up at six a.m o’clock. I’m an early bird. I go jogging for about thirty minutes and then have breakfast, I leave home at about 8 o’clock a.m and get to work by 9. I take my lunch break about 1:00, and for lunch I usually heat up a frozen meal or order takeout. I leave work around seven o’clock p.m and get home by eight. Most nights I go to bed at about 11:30 p.m. Then I start it all over again the next day.',
        ya: "I have a busy lifestyle. During the week, I usually get up at 7:00 am. I’m not an early bird. I do the household chores for about thirty minutes and then have breakfast, I leave home at about 8 o’clock a.m and get to work by 9. I take my lunch break about 12:00, and for lunch I always order take out. I leave work around 6:00 pm, then I go to Viet Hieu FEC to learn english by 7:00. I take home around 11:00 pm. And Take shower. Most of the nights I go to bed at about 1:00 am. Then I start it all over again the next day.",
    },

    {
        stt: "11.2",
        q: "What do you usually do on your weekends?",
        a: "During the weekends, I stay at home and relax, After a busy week, I do the household chores such as laundry, ironing and vacuuming.",
        ya: "During the weekends, I usually hang out with my friend. After a busy week, We party all night long, or play cards to release stress."
    },

    {
        stt: "11.8",
        q: "What are your goals for the future?",
        a: "I have a few goals. I would like to save enough money to buy an apartment. If possible, I’d love to continue my education in an english-speaking country. In the next three months, I hope to have completed my degree, and be working as an accountant. Of all the goal I set within myself, I want to travel around the world most.",
        ya: "I have a few goals. I would like to save enough money for my business. If possible. I’d love to continue my Master Degree in an english-speaking country. In the next three months, I hope to have completed all english classes at Viet Hieu FEC and get a well paying job. Of all the goals set for myself, I want to travel with my family most.",
    },
    {

        stt: "12.1",
        q: "Can you tell me a little bit about your family?",
        a: "I have a large family. I have three brothers and two sisters. One of my brothers still lives at home with my parents. And all the order siblings have all married and moved on the their own homes",
        ya: "There are four people in my family. My parents and my brothers, My brother still lives at home with my parents. And about me, I moved out four years ago and Now I live on my own."
    },

    {
        stt: "12.2",
        q: "Where do your parents come from?",
        a: "My mother is from a city called Bien Hoa and my father is originally from Da Nang city.",
        ya: "My mother is from a city called Buon Me Thuot and my father is originally from Hanoi capital.",

    },
    {
        stt: "12.3",
        q: "Do you live with your parents?",
        a: "I used to live with parents until two years ago, but now I live on my own.",
        ya: "Well you know,I got to college four years ago, SO I moved out and Now I live on my own"
    },
    {
        stt: "13.4",
        q: "Are you married?",
        a: "I got engaged three months ago. I’m getting married next month.",
        ya: " No. I’m not married, but I have plan to get married when I’m over thirty",

    },
    {
        stt: "13.5",
        q: "Do you have any children?",
        a: "No, I don’t. We are planning to start a family as soon as we buy our own house.",
        ya: "No, I don’t. I have been married yet, So I don’t have any kids and by the way I don’t like kids",

    },
    {
        stt: "13.6",
        q: "Tell me about your grandparents.",
        a: "My grandmother is about eight years old. Fortunately, still very healthy and young hearted. Unfortunately, I did not have the privilege of meeting my grandfather.",
        ya: " My grandmother is about seventy years old, and my grandfather is seventy five. Both of them are still healthy and They really enjoy each day of their life with each others",

    },
    {
        stt: '14.7',
        q: 'Do your grandparents live with you?',
        a: 'Yes my maternal grandmother does. She’s been living with us for ten years. She is such a blessing in our family.',
        ya: 'No they live on their own in my father’s hometown. I think they really enjoy each day of their life without responsibilities.'
    },
    {
        stt: '14.8',
        q: 'How would you describe your father’s character ?',
        a: 'My father is so thoughtful and open-minded. As a matter of fact, he has many good qualities and has always been a great role model to me.',
        ya: 'My father is very understanding, but I believe he is strict at times, but he still has many good qualities and I have the greatest regard for him.'
    },
    {
        stt: '14.11',
        q: 'Who are you closer to, your mother or your father?',
        a: 'This is a difficult question. I adore both of them. Maybe I’m more compatible with my mother. We are very close.',
        ya: 'This is a difficult question. I don’t spend much time with them. So it’s hard to say which one I’m more compatible with.'
    },
    {
        stt: '15.9',
        q: 'What is your mother like?',
        a: 'It’s really difficult to describe her. One thing I can say is that she has a heart of gold. She is extremely kind-hearted and a devoted family member.',
        ya: 'I find it hard to describe her. One thing I can say is that she is very understanding and kind-hearted. She works very hard to  take care of her family.'
    },
    {
        stt: '15.10',
        q: 'Which one do you resemble more, your mother or your father?',
        a: 'I look more like my father. Mainly in my eyes and other facial features. My hair is darker and curlier, but in character I take more after my mother I suppose.',
        ya: 'I look more like my father. Mainly in my hair and face shape. His hair is longer and curlier but we are totally different in character.'
    },
    {
        stt: '15.12',
        q: 'Do you argue with your mother or father?',
        a: 'Not really. My parents are very understanding and I have greatest regard for them.',
        ya: 'Not really. We don’t spend much time together but I still adore both of them.'
    },
    {
        stt: '16.14',
        q: 'Do you get along with your sister?',
        a: 'My sister and I get along very well. We are very much alike',
        ya: 'I don’t have any sisters but I used to wish I had one.'
    },
    {
        stt: '16.13',
        q: 'Are you going to bring up your children any differently than the way your parents brought you up?',
        a: 'Yes and No. My parents raised me well and gave me a good education. If I could do the same for my children I would be happy. Maybe I would be a little more flexible. I believe my parents were unreasonably strict at times so I will try to keep a balance between discipline and flexibility.',
        ya: 'Yes and No. My parents raised me well and gave me a good education. If I could do the same for my children I would be happy. Maybe I would spend more time with my kids. I believe my parents were so busy and they sent me to my grandparents. So I will try to keep a work-life balance.'
    },
    {
        stt: '17.15',
        q: 'Do you spend a lot of time with your siblings?',
        a: 'Yes, I do. I come from a very close-knit family. We depend on one another and spend lots of time together.',
        ya: "Well You Know, I lived with grandparents since I was kid and now I live by my own, so my siblings and I don't get along well"
    },
    {
        stt: '17:16',
        q: 'What is your most important quality in your brother?',
        a: 'The most important quality of my brother is definitely his sense of humor. He is really fun to be around and has a great talent for making people laugh.',
        ya: 'My brother is very understanding and so thoughtful, One thing I can say is that, He is the only person in my family, Whom I can talk to'
    },
    {
        stt: '17.17',
        q: 'In what ways are you similar to your brother?',
        a: 'We are very similar in character. For example, we are both outgoing. We are very similar in personality and have lots of things in common. For instance we enjoy the same sports and music',
        ya: 'Well you know, We are very similar in character. For example, we are both thoughtful and open-minded. We are very similar in personality, we love food and like playing football.'
    },
    {
        stt: '18.18',
        q: 'In What ways are you different from your brother?',
        a: 'We are totally different in character. For example, I’m outgoing whereas he tends to be more reserved.',
        ya: 'Well you know, We are very different in character despite we’re brothers. for example I’m reserved whereas he tends to be more outgoing. We are also different in personality, For instance I enjoy reading books and playing game, and he’d love to do some physical activities.'
    },
    {
        stt: '18.19',
        q: 'What does your brother look like?',
        a: 'He is about my height, sort of thin. He has a full head of hair and wears his hair up. He still has a very youthful appearance for someone who is over thirty.',
        ya: 'He is taller and bigger than me, and He looks like me in facial features, but his hair is darker and curlier.'
    },
    {
        stt: '18.20',
        q: 'How do you help your family members with housework?',
        a: 'I usually help my wife with the housework and the children with their school assignments. I also do the cooking, ironing and so on.',
        ya: 'I usually help my mother with household chores such as laundry, Ironing and vacuuming, I also help my brother with his homework and sometimes I help my father to fix his motorbike'
    },
    {
        stt: '19.21',
        q: 'Who does the shopping in your family?',
        a: 'My mother does most of the shopping. My father and I do some shopping from time to time.',
        ya: 'My mother does most of the shopping and sometimes I do it with her. But father never does the shopping'
    },
    {
        stt: '19.23',
        q: 'What do you like best about living in an extended family?',
        a: 'Well, the thing I like best about living in a large family is the gatherings. You never feel lonely at all because there is always lots of interaction.',
        ya: 'Well, the thing I like best about living in a large family is my grandfather. I like to talk to my grandfather. We discuss lots of topics'
    },
    {
        stt: '19.24',
        q: 'How often do you see your family?',
        a: 'Pretty frequently, three or four times a week.',
        ya: 'Rarely, typically on Tet or during holidays, because My siblings have all married and moved to their  own house. And Now I live in HCM city for work while my parents live in my hometown.'
    },
    {
        stt: '19.25:',
        q: 'How often do you have a family get-together?',
        a: 'Fairly regularly, typically on weekends or during holidays.',
        ya: 'Rarely, typically on Tet or during holidays, because My siblings have all married and moved to their  own house. And Now I live in HCM city for work while my parents live in my hometown.'
    },
    {
        stt: '20.26:',
        q: 'Are you happy with your married life?',
        a: 'Yes, very much so, I have an amazing partner and I feel truly blessed with my family life.',
        ya: "Yes, I'm very happy with my married life. I have an amazing partner and beautiful children. I'm very proud of that."
    },
    {
        stt: '20.27:',
        q: 'Why do you think you are  compatible with your wife?',
        a: 'We have everything in common. Overall, we are a very well-matched couple. We enjoy the same things and have the same ideas, and generally were just made for each other. Like most married couples though, we’ve had our ups and downs.',
        ya: 'Your answer'
    },
    {
        stt: '20.28:',
        q: 'Would you like to live with your parents after you get married?',
        a: 'I prefer to stand on my feet and be independent.',
        ya: 'Your awnser'
    },
   {
       stt: '21.1',
       q: 'Who is yor best friend?',
       a: "My best friend's name is Tom. We've known each other other for ten years now. To describe him, I would say he is so understanding and confident. He has a great sense of humor and is always very likely.",
       ya: "Your answer",
   } ,
   {
       stt: '21.2',
       q: 'Why do you call this person your best friend?',
       a: "I call Tom is my best friend because of his unique qualities 'A friend in need is a friend indeed!'. He is really supportive and always willing to help me out when a problem comes up. He is such a caring person. I always treasure his friendship.",
       ya: "Your answer",
   },
   {
       stt: '21.3',
       q: "Do you have a lot of friends?",
       a: "Yes, I have quite a few friends. I have friends from all walks of life. Of couse, some of them are only casual friends like my friend at work, but I also have some close friends.",
       ya: "your answer",
   },
{
    stt: '21.4',
    q: "In your free time, would you prefer to be alone or to be with friends?",
    a: "It depends, sometimes I prefer to be with my friends and sometimes I just want to relax without anyone disturbing me.",
    ya: "your answer"
}

] 

export default data;