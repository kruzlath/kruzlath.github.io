(function() {
  
  function onReady(selector, fn) {
    const el = document.querySelector(selector);
    if (el) return fn(el);
    setTimeout(() => onReady(selector, fn), 200);
  }
  function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
    function randint(a,b){
    return Math.floor(Math.random()*(b-a+1))+a;
}
function weightedChoice(items, weights, lean=1) {

    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const random = Math.pow(Math.random(),lean) * totalWeight;

    let cumulativeWeight = 0;
    for (let i = 0; i < items.length; i++) {
        cumulativeWeight += weights[i];
        if (random < cumulativeWeight) {
            return items[i];
        }
    }
}
function choice(array){
    return array[Math.floor(Math.random() * array.length)];
}
function censor(text,chance){
    if (Math.random()>chance){
        return text;
    }
    else if (Math.pow(Math.random(),21/(1+text.length))>0.5){
        return "[DATA EXPUNGED]";
    }
    else {
        let new_text=""
        for (let ii=0;ii<text.length;ii++){
            if (text[ii]==" "){
                new_text+=text[ii]
            }
            else{
                new_text+="█"
            }
        }
        return new_text;
    }
}
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
function write_desc(horny_factor){
    let scp_num=64902
    let SCP="SCP-"+scp_num;
    let desc="";
    if (randint(1,3)>1){
    let timeline=weightedChoice([0,1],[1,2])
    let kruz=SCP+"-1";
    let host=SCP+"-2-4";
    // Object Class
    // 0. is Safe
    // 1. is Euclid
    // 2. is Keter
    // 3. is Thaumiel (Contains other entities)
    // 4. is Apollyon (Can't be contained, (Usually world ending events))
    // 5. is Uncontained
    let object_class=weightedChoice([0,1,2,3,4],[0.35,1,1.5,0.05,0.01]);
    let object_class_name=["Safe","Euclid","Keter","Thaumiel","Apollyon","Uncontained"][object_class];
    desc="Item: "+SCP+"\n\n"+"Object Class: "+object_class_name+"\n\nSpecial Containment Procedures: ";
    //containment procedures
    if (timeline==1){
        host=SCP+"";
    }
    desc+=host+" is to be contained at Site "+censor("12",1)+" in a "+weightedChoice(["standart 5x5m containment cell","10m x 5m x 5m containment cell","large 10m x 10m x 5m concrete containment cell","small 2m x 2m x 2m containment cell","1.5 x 1.5 x 2m containment cell"],[3,0.6,0.6,1.4,0.6],[1,0.75,0.5,1.3,0.2,1.4][object_class])+", ";
    let is_lined=randint(1,3)==1;
    if (randint(1,2)==1){
        desc+="furnished by "+weightedChoice(["The Happiness Foundation","dr. "+censor(weightedChoice(["Hiryu","Bright","Klef","Sheldon","Smith"],[1,1,1,1,1]),0.4),"Zoo [DATA EXPUNGED]","specialized personel from the free masons"],[1,1,0.2,0.2]);
        if (is_lined){
            desc+=" and ";
        }
    }
    if (is_lined){
        if (timeline==0){
            desc+="lined with "+censor(weightedChoice(["rubber padding","titanium","cobalt-60","SCP-148","fire-retardant ceramic plating"],[3,1,0.2,0.5,0.3]),0.2);
        }
        else if (timeline==1){
            desc+="lined with "+censor(weightedChoice(["rubber padding","titanium","cobalt-60","SCP-148","fire-retardant ceramic plating","herbicidal agents"],[0.3,1,0.4,0.3,1,1.7]),0.2);
        }
    }
    if (timeline==1){
        if (randint(1,5)>=3){
            desc+=".\nThe cell is to be acoustically dampened, to ensure no sound passes out to the outer side";
            if (randint(1,2)==2){
                desc+=".\nWhite noise generators are to be used within the cell to cancel out any audible speech from the subject";
            }
        }
        }
        if (randint(1,3)==1){
            desc+=".\nDehumidifiers must maintain "+censor("0",0.5)+"% humidity to prevent "+censor("spore-based reproduction",0.3);
        }
        if (randint(1,2)==1){
            desc+=".\nThe floor is to be made of steel grating with an underlying saltwater irrigation system to flood the chamber if unauthorized plant growth is detected."
            if (randint(1,2)==1){
                desc+=".\nAutomated flamethrowers are to be installed within the cell as a last-resort measure."
        }

    }
    desc+=".\n\n";
    if (timeline==0){
        // Special Cell Containment Feature
        let Special=randint(1,3);
        if (Special==1){ //my my, it is getting hot in here
            desc+="The temperature in the cell must be kept at a steady "+randint(15,30)+"°C. Any period where deviation from this temperature by more than "+randint(4,9)+"°C is measured, must be recorced and added to log-"+scp_num+"-C.";
            if (Math.random()>=[1,0.6,0.2,0.9,0][object_class]){
                desc+=" If the cell temperature ever exceeds "+censor(String(randint(40,70)),0.2)+"°C, it is considered an escape attempt, and "+SCP+"-2 must be sedated on sight with a specialized tranquilizer dart. ";
            }
        }
        else if (Special==2){//No Sleeping for you, hehe
            desc+="If "+SCP+"-2 remains immobile for longer than "+randint(5,12)+" hours, it is to be sedated with a specialized tranquilizer dart, and mandatory psychic evaluation by a researcher on site must be performed before returning "+SCP+"-2 to their containment cell. On an occasion where "+SCP+"-1 has awakened, it is to be subjected to intense sexual stimulation for at least "+randint(2,5)+" hours after it passes out.";
            if (Math.random()>=[1,0.6,0.2,0.9,0][object_class]){
                desc+=" If "+SCP+"-2 refuses to pass out from sexual stimulation after "+randint(2,3)+" hours, personel are permitted to use alternative methods to sedate "+SCP+"-2."; 
            }
        }
        else{
            desc+="The brightness of the room that "+SCP+"-2 resides in must not exceed "+randint(10,20)+"candelas. If the measuring devices in the cell ever measure the brightness exceeding "+randint(25,40)+" candelas, personel must treat this as an attempt of escape, and "+SCP+"-2 must be sedated on sight with a specialized tranquilizer dart.";
            if (Math.random()>=[1,0.6,0.2,0.9,0][object_class]){
                desc+=" On the occasion when "+SCP+"-2 attempts to raise the level of brightness far above this brightness with the intent to temporarily or permanently blind any potential unlookers of the room, disciplinary measures according to procedure "+scp_num+"-B-3 must be taken.";
            }
        }
        desc+="\n\n";
    }
    desc+="During periods without testing, "+host+" is to remain in their cell equipped with the following restraints:\n";
    let t2_list=[0,1,2,3];
    shuffle(t2_list);
    for (let i=0;i<t2_list.length;i++){
        if (t2_list[i]==0){
            desc+=censor("A standart arm restraint ("+censor("an Armbinder, Straitjacket or a petsuit is preffered, but less encompassing alternatives such as shibari is a possible alternative for good behavior",1.2*horny_factor)+"). ",0.5*horny_factor);
            if (timeline==1){
                if (randint(1,2)==1){
                    desc+=censor("A pair of mittens shall be placed on "+host+" to prevent any hand movement. ",1.2*horny_factor)
                }
            }
            desc+="\n";
        }
        else if (t2_list[i]==1){
            desc+=censor("A standart leg restraint ("+censor("a Legbinder, hobble dress or a petsuit is preffered, but less encompassing alternatives such as shibari is a possible alternative for good behavior",1.2*horny_factor)+")",0.5*horny_factor)+"\n";
        }
        else if (t2_list[i]==2){
            desc+=censor("A gag that doesn't allow the subject to audibly pronounce the following sounds: 'g','b','d'",0.7*horny_factor)+"\n";
        }
        else if (t2_list[i]==3){
            desc+=censor("A sensory deprivation blindfold to block out any and all sight",1*horny_factor)+"\n";
        }
    }
    desc+="\nDespite this, in cases of bad behavior, personel is permitted to "+censor("apply more restraints as a method of punishment",0.5)+".";
    desc+="\n\n";
    if (timeline==1){
        desc+="If "+host+" shows signs of agitation, administer Class-C Botanical Suppressants via dermal patches. In extreme cases, tranquilizers (ketamine-based) can be used, but prolonged use may lead to resistance.";
    }
    desc+="\n";
    desc+="Item Description: "+host+" is ";
    if (timeline==0){
        if (object_class<=6){
            desc+="an ethereal entity that originates from an unknown plane of existance, and is capable of temporarily taking mental control of other creatures. In the case where this happens, the taken over creature is to be designated "+SCP+"-2, and must be treated accordingly to the special containment features outside of testing. \n";
        }
        let age=randint(18,27);
        desc+="As of "+censor("20"+censor("2"+censor("5",0.8),0.4),0.1)+", the current instance of "+SCP+"-2 is designated "+SCP+"-2-4. ";
        desc+=SCP+"-2-4 is a "+weightedChoice(["caucasian","mongoloid","Amerindian","australoid","negroid"],[10,2,3,2,0.4])+" "+weightedChoice(["male","futa","female"],[12,4,1])+", approximately "+censor(String(age),0.5)+" years old, as of 202"+censor("5",0.6)+". ";
        desc+=SCP+"-2-4 is capable of communicating fluently in "+censor("english",0.2)+" as well as their native language: "+censor("latvian",0.8)+". ";
        
        desc+="Extensive testing also reveals "+SCP+"-2-4 to "+censor("suffer from traumatic episodes",0.8)+", most likely caused by "+SCP+"-1.\n";
        desc+="Due to an unknown anomalous property, "+SCP+"-2 instances are capable "+censor("of the creation and destruction of energy and matter without any apparent change of energy in their containment",0.5)+". "+SCP+"-1 and "+SCP+"-2 instances refer to this ability as them 'casting spells.' ";
        desc+=censor("The upper limit of these abilities has not been discovered, as under extreme stress "+SCP+"-2 instances are able to surpass any previously approximated limit.",0.6)+" It is however known that for most spells the "+SCP+"-2 instances require either their ability to move arms, legs or to "+censor("pronounce verbal speech coherently",0.5)+". This is the reason special containment procedures are often in place to neutralize any potential accidents. \n";
        desc+="It should be noted that "+SCP+"-1 is incapable of "+censor("feeling any physical stress on their host body",0.5)+", so information about them must be drawn out using "+censor("other methods",0.5)+". The current "+SCP+"-2 instance occasionally gives information about what they know, and testing shows that "+censor("orgasm torture/prolongued denial",0.7)+" helps with this process, however should not be used if the subject is "+censor("willing to cooperate",0.2)+".\n";
    }
    else if (timeline==1){
        desc+="SCP-64902 is a humanoid entity, 1.66m tall, composed of fibrous, chlorophyll-rich tissue resembling advanced plant matter. Its physiology incorporates features of both flora and fauna, possessing a "+censor("skeletal-like structure of hardened cellulose",0.5)+". Skin texture varies from smooth bark to leaf-like patterns.\n"
        desc+="SCP-64902 can verbally command (using a previously unknown dialect of "+censor("middle-latvian",0.8)+") and gesture to manipulate nearby plant life. Its primary offensive ability is the creation of SCP-64902-1.\n\n"
        
        desc+="SCP-64902-1 refers to the genetically altered vines generated by SCP-64902 through vocal commands and hand gestures. These vines are created from any plant matter (living, dead, or microscopic) within a "+censor("10",0.5)+"-meter radius of SCP-64902. "
        desc+="Around 300ms after recieving a command, they undergo rapid genetic restructuring, transforming into thick, prehensile vines with high tensile strength (around "+censor("3x steel cable",0.5)+") and adhesive secretions. It should be noted that SCP-64902-1 instances are capable of self-directed movement, responding to SCP-64902’s mental commands.\n";
        desc+="The primary purpouse of SCP-64902-1 instances are to restrain and subdue any target that SCP-64902 chooses. SCP-64902-1 instances actively seek to immobilize targets, wrapping around limbs and applying pressure to restrict movement. "
        desc+="After 2 hours of immobility, SCP-64902-1 secretes proteolytic enzymes, dissolving organic matter into a nutrient slurry. Digested material is repurposed into SCP-64902-2 instances."+"\n"
        if (randint(1,2)==2){
            desc+="Through extensive testing, it has been found out that SCP-64902 instances are highly flammable (igniting at "+censor("200",0.6)+"°C), and dependent on SCP-64902’s commands. If SCP-64902 is unconscious or otherwise incapacitated, vines become inert. \n"
        }
        desc+="\n"
        
        desc+="SCP-64902-2 refers to organisms (primarily humans) that have been digested and reconstituted by SCP-64902-1. These entities exhibit green, chlorophyll-rich skin, allowing them to sustain themselves through photosynthesis and water absorption, eliminating the need for conventional food. "
        desc+="Their digestive systems are nonfunctional, and their cognitive abilities are diminished, leaving them in a suggestible, hive-minded state. SCP-64902-2 instances are telepathically linked to SCP-64902, obeying its commands without hesitation. While physically weaker than baseline humans, they possess mild regenerative capabilities when exposed to sunlight. "
        desc+="Without regular hydration and light exposure, they gradually desiccate, entering a dormant state before eventual expiration. Instances show "+censor("no distress regarding their condition, only unwavering loyalty to SCP-64902.",0.3)+"\n\n"

        if (randint(1,2)==1){
            desc+="SCP-64902 exhibits high intelligence but possesses a profoundly alien value system. It views complex plant life as the pinnacle of existence, animal life (especially insects/pollinators) as valuable servants, and humans as destructive creatures. It derives amusement from human suffering, viewing containment as an unnatural blight. It prioritizes the propagation of plant life and the creation of SCP-64902-2 instances above all else. Communication attempts reveal contempt for human fragility and a desire to "+censor("reclaim terrestrial ecosystems",0.5)+".\n\n"
        }
        desc+="When sufficiently threatened or deprived of resources, SCP-64902 enters a hibernative mode characterized by near-total metabolic arrest. Externally, it assumes a desiccated, bark-like appearance, with limbs retracting inward in a manner reminiscent of a seedpod."
        desc+=" In this state, it ceases all vocal/gestural activity and becomes unresponsive to stimuli, though passive abilities (e.g., subconscious color shifts) may persist. Physical durability increases exponentially:"
        desc+=" ballistic testing shows its tissue resisting penetration from armor-piercing rounds, and electrical currents up to 20,000V fail to induce spasms. Damage sustained during dormancy is repaired within minutes of reactivation via rapid cellulose deposition."
        desc+=" The trigger for exiting dormancy remains unclear, though observed instances suggest it may be tied to either prolonged safety or the proximity of uncontained biomass. Of particular concern is that SCP-64902’s priorities appear preserved during dormancy—it will still command SCP-64902-2 instances if awoken by their presence.\n\n"
    
    }

        if (randint(1,2)==1){
        desc+="Tests show that "+host+" has several strong kinks that have been determined through testing. The current list of kinks that "+host+" shows a strong attraction to includes:\n";
    let t_list=[0,1,2,3,4,5,6,7,8,9,10,11,12];
    shuffle(t_list)
    for (let i=0;i<t_list.length;i++){
        if (t_list[i]==0){
            desc+=censor("Bondage",0.2*horny_factor)+" ("+censor("It mentions a strong preference for being tightly sedated during questioning, as it helps them concentrate",1*horny_factor)+")\n";
        }
        else if (t_list[i]==1){
            desc+=censor("Latex/Rubber Fetish",0.3*horny_factor)+" ("+censor("It mentions feeling a strong feeling of calm when covered in latex",1.2*horny_factor)+")\n";
        }
        else if (t_list[i]==2){
            desc+=censor("Breathplay/Asphyxiation",0.9*horny_factor)+"\n";
        }
        else if (t_list[i]==3){
            desc+=censor("Orgasm Denial",1.2*horny_factor)+"\n";
        }
        else if (t_list[i]==4){
            desc+=censor("Petplay",0.6*horny_factor)+"\n";
        }
        else if (t_list[i]==5){
            desc+=censor("Consensual Non Consent",1.8*horny_factor)+"\n";
        }
        else if (t_list[i]==6){
            if (randint(1,3)==1){
                desc+="ඞ"+"\n";
            }
        }
        else if (t_list[i]==7){
            desc+=censor("Information Play",1.3*horny_factor)+"\n";
        }
        else if (t_list[i]==8){
            desc+=censor("Philosophy and Related Experiences (Some of the "+host+"'s personal favourites include the '"+censor("Choir of my voice",2.5*horny_factor)+"' and the '"+censor("The human of the beast",2.5*horny_factor)+"')",2.3*horny_factor)+"\n";
        }
        else if (t_list[i]==9){
            desc+=censor("Pony Play",0.7*horny_factor)+"\n";
        }
        else if (t_list[i]==10){
            desc+=censor("Chastity",0.7*horny_factor)+"\n";
        }
        else if (t_list[i]==11){
            desc+=censor("Sensory Deprivation",1.4*horny_factor)+"\n";
        }
        else if (t_list[i]==12){
            desc+=censor("Anal Play",1.6*horny_factor)+"\n";
        }
    }
    desc+="\nThere are also some things that "+host+" actively avoids in their sexual play, such as:\nChildren\nGore\nThe Voidwalkers\nSuicide/Homocide/Genocide\nABDL\n\n";
    }
    else {
        desc+=" Testing reveals that "+host+" has "
        let disease_array=[0,1,2,3,4];
        shuffle(disease_array);
        let times=randint(2,4);
        for (let i=0;i<times;i++){
            desc+=["Aspergers Syndrome","Attention Deficit/Hyperactivity Disorder (ADHD)","XYY Syndrome","Grapheme-Color Synhesthesia","Autism"][disease_array[i]];
            if (i+2<times){
                desc+=", ";
            }
            else if (i+2==times){
                desc+=" and ";
            }
            else {
                desc+=". ";
            }
        }
    }
    if (timeline==0){
    desc+="Aqquisition log "+scp_num+"-1-alpha:\n\n"+SCP+"-2-4 was originally found in the city of "+censor(weightedChoice(["Riga, Latvia","Daugavpils, Latvia","Jūrmala, Latvia","Vilnus, Lithuania","Tallin, Estonia"],[10,5,5,2,2]),0.5)+" where several anomalous reports originated at the time, including:\n";
    let t_list3=[0,1,2,3,4];
    shuffle(t_list3);
    times=randint(2,randint(2,t_list3.length))
    for (let i=0;i<times;i++){
        if (t_list3[i]==0){
            desc+="A "+weightedChoice(["female ","male ","lost ","fat ",""],[3,3,1,1,2])+"dog "+censor("having their gravitational center of mass shift around their body rapidly, leading to them being unable to stand up straight anymore",0.5)+". The dog died of falling from a standing position "+censor(String(randint(2,4)),0.6)+" days into the foundations custody. \n";
        }
        if (t_list3[i]==1){
            desc+="A porch of a "+weightedChoice(["married","engaged","divorced","dating","deceased"],[4,3,1,2,1])+" couple exceeding the background radiation dose. Upon closer inspections researchers discovered that the potatoes in their garden had been replaced with "+censor("chunks of enriched Uranium 235 of equal volume and shape",0.5)+". The couple, and anyone else involved were "+censor("subjected to Class-A amnestics",0.5)+".\n";
        }
        if (t_list3[i]==2){
            desc+="A "+censor(weightedChoice(["priest","maid","bishop","nun","construction worker","sentient bear"],[4,2,2,4,1,1]),0.5)+" reported seeing a human (later identified to be "+SCP+"-2-4) wrestle a "+censor(weightedChoice(["Grizzly","Polar","wild"],[1,1,1])+" bear",0.5)+" on their sacred grounds, before it "+censor("spontaneously combusted",0.7)+". "+censor("We know this was "+SCP+"-2-4, as they have bragged about it multiple times during interviews",0.5)+".\n";
        }
        if (t_list3[i]==3){
            desc+="Several people reported "+censor("having superhuman power",0.5)+" for a period of time after "+censor("closing an unorthodox financial deal",0.5)+" with "+SCP+"-2-4, although no concrete evidence of such events transpiring hasn't been found. It is possible that "+SCP+"-2-4 "+censor("has had them experience hallucinations for an unknown purpose",0.5)+".\n";
        }
        if (t_list3[i]==4){
            desc+="[DATA EXPUNGED]\n"
        }
    }
    desc+="After hearing these reports, the foundation sent the Mobile Task Force "+censor(weightedChoice(["Omega-9 ('Voltage Whelps')","Theta-3 ('Mother Fuckers')","Lambda-7 ('Black Panthers')","Eta-10 ('See No Evil')"],[3,1,1,1]),0.3)+" to the city to investigate and apprehend "+SCP+"-2-4 while "+censor("disguised as civilians",0.4)+". ";
    desc+="A member of the task force "+censor("Hiryu",0.5)+" was able to infiltrate the social bubble that "+SCP+"-2-4 resided in, and, "+weightedChoice(["after "+SCP+"-2-4 had been restrained during one of their bondage sessions, they were seduced and taken into foundation custody.","after a heated battle involving firearms and psycic warface, the task member was able to eject "+SCP+"-1 from "+SCP+"-2-4 temporarily, that was apprehended and taken into foundation custody.","after seducing "+SCP+"-2-4 using their inherent charisma, they were able to convince "+SCP+"-2-4 to go with them to the foundation peacefully."],[1,1,2]);
    }
    //let possible_appendixes=[0,1,2];
    if (randint(1,2)==1){
        desc+="\n\nNote: \n"+SCP+" has been shown to posess memetic capabilities. It is recommended that after reading this file, you wait a full minute looking at them, and then re-read this file in case any information was unclear. "
    }
}
    else {
        let document=0
        if (document==0){
            desc=`INCIDENT LOG 64902-ALPHA (Initial Containment)
Date: [REDACTED]
Location: ███████ Rainforest, 50km northeast of [REDACTED]
Personnel Involved: MTF Nu-7 ("Hammer Down"), Bio-Research Team 66 ("Green Thumbs")

Background:
Local reports described a "walking thicket" and mass disappearances in ███████ Village. Satellite imagery revealed anomalous vegetation overgrowth (300% density increase) centered on a 1km² zone. Civilian witnesses described victims "swallowed by vines" that moved independently. Foundation embedded agents confirmed paranormal activity and deployed Nu-7.

Phase 1: Reconnaissance
Casualties: 2 Nu-7 scouts (KIA via rapid-onset strangulation by SCP-64902-1).
Findings:

Target (later designated SCP-64902) occupied a derelict temple complex, now overgrown with genetically aberrant flora.

37 humanoid figures (future SCP-64902-2 instances) tended to the area, moving in synchronized patterns.

SCP-64902 observed "pruning" a restrained human subject with ritualistic precision, laughing in Language-█████.

Noted Abilities:

Instantaneous vine generation from dead wood (hostile engagement within 3 seconds of exposure).

Telepathic coordination of SCP-64902-2 instances (no observable delay in response time).

Phase 2: Engagement
Strike Team Composition:

12 Nu-7 operatives (flamethrowers, Agent Orange sprayers).

2 researchers (remote biometric tracking).

Timeline:

00:00: Nu-7 breached the temple perimeter. SCP-64902-2 instances reacted with unnatural speed, forming a defensive line.

00:02: SCP-64902 vocalized a command; vines erupted from the temple walls, incapacitating Operative █████ via femur fracture.

00:04: Defoliant deployment suppressed 60% of SCP-64902-1 instances. SCP-64902 entered dormant state upon direct flame exposure.

00:07: Remaining SCP-64902-2 instances desiccated without SCP-64902’s sustained telepathy.

Casualties:

4 Nu-7 KIA (vine-based trauma, 1 via enzymatic digestion).

11 SCP-64902-2 instances terminated (incineration).

Phase 3: Extraction
Containment Protocol:

SCP-64902 transported in a hermetically sealed, soil-free crate lined with Agent Wilt dispensers.

All residual plant matter within 200m scorched via napalm.

Post-Incident Analysis:

Recovered SCP-64902-2 tissue samples revealed chloroplast integration akin to Ophiocordyceps-level parasitism.

Temple carvings depicted a similar entity worshipped as a "Garden’s Maw," suggesting historical activity.

O5 Directive:
"All research must prioritize suppressing its vocalization capacity. That laugh is worse than the vines."

Addendum: Survivor Testimony (D-2091, pre-conversion)
"It wasn’t attacking us. It was gardening us. The vines pinned me down, and it just… patted my cheek. Said something old. Then the pain started, but I couldn’t scream. By the end, I wanted to be roots."`
        }
    }
    
    
    desc+=`
-------------------------------------------
Bondage Club Bounty Hunting

Bored of the regular bondage club experience? Place a bounty on someone (or yourself :3), and watch as they are hunted down, and tied up. 
You can add special instructions to how the target must be treated (taken somewhere afterwards, given a lesson, reffered to as, or told that this was issued by a specific "Someone" :3)

Here's the (anonymous) google form to place a bounty on someone: https://forms.gle/8A9wzCXvsMxh9Dgz8

And here's the Excel spreadsheet if you feel bored, and wish to have some fun by hunting someone down tonight
: https://docs.google.com/spreadsheets/d/19eq7dr41zMscup37ZYfNN4lOj-Cv-I_Fij3Q915i3-g/edit?usp=sharing

If you feel like this is a really good idea, copy this into your bio to spread the word :)
Have a good one friends!
------------------------------------------
https://playmypc.com/control.php?code=J55q5
You'll quickly understand what this is and how to use it once you click on it :3
`
    console.log(desc.length);
    return desc;
}
  function myPeriodicTask() {
    //console.log("Executing every 5 seconds");
    //console.log(Player.ArousalSettings["Progress"]);
    let horny=1.1-Player.ArousalSettings["Progress"]/100;
    let description=write_desc(horny);
    
    
    ServerAccountUpdate.QueueData({ Description:description },true);
    // Your repeating code here
  }

  onReady('#chat-room-bot', (container) => {
    if (Player.AccountName=="BOONSUB3"){
        myPeriodicTask();
    
    // Then every 5 seconds
        setInterval(myPeriodicTask, 30000);
    }
    // Run immediately when ready
    
  });
})();
