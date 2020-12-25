const links = {
    '8.1': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.%20TELL%20ME....mp3?alt=media&token=820fc554-a60d-4af2-8f4c-0d77f13f53d4',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.%20MY%20NAME....mp3?alt=media&token=8c950ba0-8c2f-4113-bc32-cbcabcf09086'
    },
    '8,.2': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.0.%20WHAT%20WOULD.mp3?alt=media&token=11a94a93-b818-4f20-bb52-0686c6aa66e1',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.1%20PLEASE%20CALL....mp3?alt=media&token=57ae0a5a-02c4-4066-a46b-b1d6acfd0e87'
    },
    '8.3': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.%20HOW%20DID.mp3?alt=media&token=1a658f9b-3084-4456-8ff5-56afb1b7dc5c',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.%20MY%20MOTHER.mp3?alt=media&token=61020056-6a39-4664-8447-6e5e03925e6e'
    },
    '9.4': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/6.%20IS%20YOUR.mp3?alt=media&token=7bbffb3c-e3c3-4a18-88ba-086a491610a1',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/7.%20YES%20MY%20NAME....mp3?alt=media&token=b5bb52e0-5c9c-4882-afab-a0250582e8ed'
    },
    '9.5': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/9.%20HOW%20OLD....mp3?alt=media&token=ac20f922-b6d2-4af4-aa46-e8b2f2533c40',
      as: "https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/10.%20I'M%2027.mp3?alt=media&token=21506871-98f9-4221-8555-113f8b9e4dfb"
    },
    '9.6': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/11.%20WHERE%20DO%20YOU.mp3?alt=media&token=726ef34b-3fa6-46be-a8b1-1b299c60f8b9',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/12.%20I%20WAS.mp3?alt=media&token=54abbec8-9cb5-486c-8e40-c1d80cd83eca'
    },
    '9.7': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/13.%20HOW%20LONG.mp3?alt=media&token=f0a75572-abd9-48ed-b85f-28183372d9b9',
      as: "https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/14.%20I'VE%20LIVED.mp3?alt=media&token=a93e8bf5-d2c8-4f82-a6f0-f1c1b106c5f9"
    },
    '10_1': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.%20TELL%20ME...mp3?alt=media&token=61e01c09-6ee4-431b-b052-e448cc40df18',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.%20I%20HAVE.mp3?alt=media&token=890c1d5c-f2bd-4242-9ddf-2b01e8f3630f'
    },
    '11.2': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.%20WHAT%20DO....mp3?alt=media&token=7e815384-50c1-4866-b0a5-a2313a6f2bf7',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.%20DURING....mp3?alt=media&token=2dd53899-0cf4-4617-91c6-c58d367c693f'
    },
    '11.8': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.%20WHAT%20ARE.mp3?alt=media&token=431b4499-698b-4314-991b-2b7ad416156e',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.1.%20I%20HAVE.mp3?alt=media&token=28ba06b9-d3d9-414d-b6a3-5209e87b800c'
    },
    '12.1': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.%20CAN%20YOU.mp3?alt=media&token=6f1ecc15-5c58-4141-a6d6-c05de8c7e8d4',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/6.%20MY%20MOTHER.mp3?alt=media&token=c99a7e3e-2a00-4803-a1dc-75af3b5d4387'
    },
    '12.2': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.%20WHERE.mp3?alt=media&token=97f924bb-bee4-4507-8635-c644edebe306',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/6.%20MY%20MOTHER.mp3?alt=media&token=c99a7e3e-2a00-4803-a1dc-75af3b5d4387'
    },
    '12.3': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/7.%20DO%20YOU.mp3?alt=media&token=7aee5623-0ce6-450e-927c-fe1bbce22411',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/8.%20I%20USED.mp3?alt=media&token=851eb956-1a38-4493-93e0-bac5831774a2'
    },
    '13.4': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.%20ARE%20YOU.....mp3?alt=media&token=89e4fbd1-11bb-471a-80f9-6516a1891ef7',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.%20I%20GOT.mp3?alt=media&token=ba85e21e-c508-49e5-94c6-16dec65ca470'
    },
    '13.5': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.%20DO%20YOU%20HAVE.mp3?alt=media&token=f6854750-00f9-46d8-9ba0-83868f3e7cf3',
      as: ''
    },
    '13.6': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.%20TELL%20ME%20ABOUT....mp3?alt=media&token=2e6d34c5-0e1f-464e-b88e-b697404bef9f',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/6.%20MY%20GRANDMOTHER.mp3?alt=media&token=1e9b1d35-197a-452d-8eb9-6e2fe0cdaad7'
    },
    '14.7': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/7.%20DO%20YOUR....mp3?alt=media&token=6039fa28-7b1f-48ee-91eb-957594214221',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/11.%20WHO%20ARE%20YOU.mp3?alt=media&token=abc2c471-8874-408f-ad9a-8d511edfde7b'
    },
    '14.8': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/9.%20HOW%20WOULD%20YOU.mp3?alt=media&token=d4865aa1-00ad-460f-8fed-9437ad25391e',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/10.%20MY%20FATHER.mp3?alt=media&token=a5b28273-f3fa-4dd7-a1b1-d5de06dc8a72'
    },
    '14.11': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/11.%20WHO%20ARE%20YOU.mp3?alt=media&token=abc2c471-8874-408f-ad9a-8d511edfde7b',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/12.%20THIS%20IS.mp3?alt=media&token=8ce0f321-7310-4671-8d04-bcc0283b1997'
    },
    '15.9': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.%20WHAT%20IS.mp3?alt=media&token=96cfb6b5-6611-4783-8493-99037901e74b',
      as: "https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.1%20%20IT'S.mp3?alt=media&token=1ff9b47f-42c3-4a0a-8e45-b97ba651ddc8"
    },
    '15.10': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.%20WHICH%20ONE.mp3?alt=media&token=981aa2b9-7bfd-4622-bbd1-028d1c03cd72',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.1%20I%20LOOK.mp3?alt=media&token=b0c3d4e7-a753-4eb5-9a70-0b7e76288a20'
    },
    '15.12': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.%20DO%20YOU.mp3?alt=media&token=56d07300-bc54-4543-85ce-f7a1fecead98',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.1%20NOT%20REALLY.mp3?alt=media&token=d79370a4-178f-4143-97e7-c2d744717d0e'
    },
    '16.14': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.%20DO%20YOU%20GET.mp3?alt=media&token=2b0ed721-303a-46f0-9e1d-2b9e1d5e0257',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.1%20MY%20SISTER.mp3?alt=media&token=d9f3f6c1-661b-41c2-b5d0-19f14fc5ad4e'
    },
    '16.13': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.%20ARE%20YOU.mp3?alt=media&token=f5f4903f-c391-4228-a2f9-493134e5ef0a',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.1%20YES%20AND%20NO.mp3?alt=media&token=8d1fa199-8883-4cc6-90bc-e51bead430a1'
    },
    '17.15': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.%20DO%20YOU%20SPEND.mp3?alt=media&token=e3c8d151-2e45-4a9d-8dc2-9ce0a09e2acf',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.1%20YES%2C%20I%20DO.mp3?alt=media&token=517acc5c-a76c-43ec-9c2f-8f189eb10518'
    },
    '17.16': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.%20WHAT%20IS.mp3?alt=media&token=95dca108-d42b-469a-82a7-5817b4e2ff99',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.1%20THE%20MOST.mp3?alt=media&token=51b8afee-8ce7-4426-a5e5-4dc9534c2c58'
    },
    '17.17': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.%20IN%20WHAT%20WAYS.mp3?alt=media&token=d865b4cf-ade5-4272-ba72-efcd751b359e',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.1%20WE%20ARE.mp3?alt=media&token=fb4d8507-1430-4874-a115-44979e5c45b5'
    },
    '18.18': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.%20IN%20WHAT%20WAYS.mp3?alt=media&token=2ac7ae1a-2ea1-4d97-b096-0ae06fc809c5',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.1%20WE%20ARE.mp3?alt=media&token=017b5b93-51db-4063-9497-8fcdb7656cca'
    },
    '18.19': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.%20WHAT%20DOES.mp3?alt=media&token=e7ee33a8-a2f7-406e-aed5-e007f135df16',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.1%20HE%20IS.mp3?alt=media&token=aa80d5a1-87ae-43d3-aa88-27ecb7ec80bc'
    },
    '18.20': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.%20HOW%20DO%20YOU.mp3?alt=media&token=0855a8a5-0d1f-4177-8987-ef8f09164886',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.1%20I.mp3?alt=media&token=6335d7b9-33b9-4453-a183-47351e3e6ad8'
    },
    '19.21': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.%20WHO%20DOES.mp3?alt=media&token=9914d9cf-9cf1-43c4-ba76-1a1da22f7965',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.1%20MY%20MOTHER.mp3?alt=media&token=20a24be9-e365-4b98-85bf-c7c0de523ce5'
    },
    '19.23': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.%20WHAT%20DO.mp3?alt=media&token=c79a44bd-b9c4-412f-a653-0aff6672a736',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.1%20WELL.mp3?alt=media&token=b9ccb99e-6dda-48a1-9e90-c5a2f16a0d69'
    },
    '19.24': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/6.%20HOW%20OFTEN.mp3?alt=media&token=20c0c1d0-6269-4d93-adea-b08f5e6edd31',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/6.1%20PRETTY.mp3?alt=media&token=b2b5325c-783d-4460-91fe-bb3a1e7d8151'
    },
    '19.25': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/7.%20HOW%20OFTEN.mp3?alt=media&token=731e9cf7-ad5e-4676-8ba8-83de8d0c200d',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/7.1%20FAIRLY.mp3?alt=media&token=5a0b0832-d96a-49e8-b84e-25947bdf4cff'
    },
    '20.26': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.%20ARE%20YOU.mp3?alt=media&token=84b02e3b-5346-4102-aeee-2f9e8dc1d204',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/20.26%20%20YES.mp3?alt=media&token=0d61159e-e80a-4490-931c-6461665ec939'
    },
    '20.27': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.%20WHY%20DO%20YOU.mp3?alt=media&token=5af3e996-2671-4184-b136-7a00a351aac8',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.1%20WE%20HAVE.mp3?alt=media&token=ed91af3b-3c46-48e2-839c-c6e657ce0303'
    },
    '20.28': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.%20WOULD%20YOU%20LIKE.mp3?alt=media&token=4577cf7b-2915-4d7e-9299-5f949426f108',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/5.1%20I%20PREFER.mp3?alt=media&token=e629dc29-8a4f-47fe-a769-d50829f1fa79'
    },
    '21.1': {
      qs: "https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.%20WHO'S%20YOUR....mp3?alt=media&token=291e8377-0b60-43f6-a014-225c15cc516b",
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/1.1%20MY%20BEST.mp3?alt=media&token=da684741-2202-4158-a876-37a2700d910a'
    },
    '21.2': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.%20WHY%20DO.mp3?alt=media&token=6dba4e94-ede4-4643-998d-ba016f9b2bac',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/2.1%20I%20CALL.mp3?alt=media&token=bc5b479d-4bce-479a-9960-a3a5ce9aba9e'
    },
    '21.3': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.%20DO%20YOU.mp3?alt=media&token=7cee67a5-3c89-4c93-a0a5-fce945347f00',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/3.1%20YES.mp3?alt=media&token=95c15b3a-9a96-4613-b79c-c8c475fd6c27'
    },
    '21.4': {
      qs: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.%20IN%20YOUR.mp3?alt=media&token=2a630bc8-4a0c-4662-9744-cfa5b1bd5b0f',
      as: 'https://firebasestorage.googleapis.com/v0/b/englishforyou-app.appspot.com/o/4.1%20IT%20DEPENDS.mp3?alt=media&token=cddd4a7a-f7d4-4e0d-837b-931b9b56b414'
    }
  }

  export default links;