const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,237695079053";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,237695079053";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,237695079053";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_50_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTg5LFxuICAgICAgICA4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvSmtHQnJqVXdVMGROV3krbzNYY3laVkV4U251bStZZENMWHBONGppa2o0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3MTRsak1uYlRJNkJhM25IbnFDZ1V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxMDQwYjA1LTM5MWQtNDE2MC05Y2ZjLWMyNmQ5YmJmNzQ1OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDE3OSxcbiAgICAgIDgwLFxuICAgICAgOTcsXG4gICAgICAyMzcsXG4gICAgICAxNTgsXG4gICAgICA1MSxcbiAgICAgIDExNSxcbiAgICAgIDIzOSxcbiAgICAgIDg5LFxuICAgICAgNTUsXG4gICAgICAyMzAsXG4gICAgICAyMTIsXG4gICAgICAyNyxcbiAgICAgIDE0NixcbiAgICAgIDI0NCxcbiAgICAgIDE4NixcbiAgICAgIDU1LFxuICAgICAgMjI3LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDM5LFxuICAgICAgNTIsXG4gICAgICAxNTUsXG4gICAgICAxMDUsXG4gICAgICA1OSxcbiAgICAgIDE3OSxcbiAgICAgIDEyOSxcbiAgICAgIDQsXG4gICAgICA3LFxuICAgICAgMTgwLFxuICAgICAgODUsXG4gICAgICA1MSxcbiAgICAgIDcwLFxuICAgICAgNDMsXG4gICAgICAyNTAsXG4gICAgICA2MCxcbiAgICAgIDg4LFxuICAgICAgNTIsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVNZTUdETDVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5NTA3OTA1Mzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXIgTG/Dr2NcIixcbiAgICBcImxpZFwiOiBcIjExMDQyODEzOTIzNDAyOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdxK2JNQkVLcXF6N2dHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2U3BMa1lKUjlpTXFGWjVUVzZkRU0rb0pLKzQ1Z3haQnRwQy96WTU0U21rPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkh1U05VWVliRUhlbUpSVVFBV2VubXdZRlM5WlpVR1VJdm5KbzFDVjZDb1R2Z3JDcXVDVnZvRkhLNllTVTNlUXFOZDVocUVKdGJ4VUR2MHVxSjdvdUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktFQWpoYXJsYUVZSUJudWY4TFZHK2doWXRLdGJFb0JHdkovdWxqeFB0dTZKYlRrUnQ2NmMxSVZyYnBSWXNFYVVROGxBZkRrYkxsQk9PYzRmU084MkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5NTA3OTA1Mzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTM1MzAwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxXTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFdOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMkZtVlNKWGlKVE91SGtlSE54a0k0TENkaTRJVUJiaVpkZVhOaFRYZGlNQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzczNzgxNjEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTM1MjkyNTgzN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
