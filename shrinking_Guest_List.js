"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Uzair Ali', 'Faisal Ali', 'Nabeel Ali'];
let my_name = 'Uzair Zia';
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear Mr. ${guest_list[i]}, \nIts my pleaseure to invite you for the dinner.\nRegards,\n${my_name}\n\n`);
// }
let absent_guest = 'Faisal Ali';
let new_guest = 'Abdul Atique';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('\nDear Mr.'+guest_list[i] + '\nIts my pleasure to invite you for the dinner.\nRegards,\n'+my_name);
// }
console.log(`\n\nMr. ${absent_guest} is not coming to the dinner.\n\n`);
console.log('We have found a bigger table, therefore 3 more prestigiuos guests are invited.\n\n');
guest_list.unshift('Fakhar Zaman');
guest_list.splice(2, 0, 'Shahid Afridi');
guest_list.push('Shaheen Afridi');
for (let i = 0; i < guest_list.length; i++) {
    console.log('\nDear Mr.' + guest_list[i] + '\nIts my pleasure to invite you for the dinner.\nRegards,\n' + my_name);
}
console.log('\n\nsorry we cant arrange big table. therefore, only two people are invited.');
while (guest_list.length > 2) { //aray ki length jab tak 2 say bari ho tab tk ye code chalana hai
    let remove_guest = guest_list.pop(); //pop(array main say banday nikalna last main say) - jis banday ka name remove karta hai usay apnay andar save kar leta hai - 
    console.log(`Sorry Mr. ${remove_guest}, you are not invited to the dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('\nDear Mr.' + guest_list[i] + '\nYou are still invited for the dinner.\nRegards,\n' + my_name);
}
guest_list.splice(0, 2); //0 index pay jo b banda hai wahan say 2 names delete karnay hain
console.log(guest_list);
