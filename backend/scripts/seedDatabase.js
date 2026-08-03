import mongoose from "mongoose";

import dotenv from "dotenv";

import User from "../models/User.js";
import Channel from "../models/Channel.js";
import Video from "../models/Video.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

console.log("MongoDB Connected");

await Video.deleteMany({});

await Channel.deleteMany({});

await User.deleteMany({});

const categories=[

"Music",
"Gaming",
"Education",
"Technology",
"News",
"Sports",
"Programming",
"Entertainment"

];

const users=[];

for(let i=1;i<=10;i++){

const user=await User.create({

username:`creator${i}`,

email:`creator${i}@gmail.com`,

password:"123456"

});

users.push(user);

}

const channels=[];

for(let i=0;i<users.length;i++){

const channel=await Channel.create({

owner:users[i]._id,

name:`${users[i].username} Channel`,

description:"Sample Channel",

subscribers:Math.floor(Math.random()*50000)

});

channels.push(channel);

}

const thumbs=[

"https://picsum.photos/640/360?1",
"https://picsum.photos/640/360?2",
"https://picsum.photos/640/360?3",
"https://picsum.photos/640/360?4",
"https://picsum.photos/640/360?5",
"https://picsum.photos/640/360?6",
"https://picsum.photos/640/360?7",
"https://picsum.photos/640/360?8"

];

for(let i=1;i<=50;i++){

const owner=users[Math.floor(Math.random()*users.length)];

const channel=channels.find(c=>String(c.owner)===String(owner._id));

await Video.create({

owner:owner._id,

channel:channel._id,

title:`Sample Video ${i}`,

description:`This is demo description for Sample Video ${i}.`,

thumbnailUrl:thumbs[i%thumbs.length],

videoUrl:"https://samplelib.com/lib/preview/mp4/sample-5s.mp4",

views:Math.floor(Math.random()*200000),

category:categories[Math.floor(Math.random()*categories.length)]

});

}

console.log("");

console.log("============================");

console.log("Seed Completed Successfully");

console.log("============================");

console.log("Users: 10");

console.log("Channels: 10");

console.log("Videos: 50");

await mongoose.disconnect();

process.exit();

