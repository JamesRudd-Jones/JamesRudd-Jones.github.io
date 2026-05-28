// src/assets/projects/iom_1/project_page-iom_1.js
import React from 'react';
import { Row, Column, FullWidth } from '../ProjectLayout';
import ExpandableImage from '../ExpandableImage';
// import VideoPlayer from '../VideoPlayer';

// Media Imports
import mainPhoto from './images/main_pic.jpg';
import onePhoto from "./images/1_base_forms.jpg";
import twoPhoto from "./images/2_front_forms.jpg";
import threePhoto from "./images/3_back_forms.jpg";
import fourPhoto from "./images/4_back_forms.jpg";
import fivePhoto from "./images/5_back_forms.jpg";
import sixPhoto from "./images/6_back_straps.jpg";
import sevenPhoto from"./images/7_the_plane.jpg";
import eightPhoto from "./images/8_buckling.jpg";
import ninePhoto from "./images/9_buckling.jpg";
import tenPhoto from "./images/10_aft.jpg";
import elevenPhoto from "./images/11_fore.jpg";
import twelvePhoto from "./images/12_whole_boat.jpg";
import thirteenPhoto from "./images/13_fibreglass.jpg";
import fourteenPhoto from "./images/14_fibreglass.jpg";
import fifteenPhoto from"./images/15_internal.jpg";



const ProjectPageInternationalOneMetre1 = () => {
  return (
    <div>
      <h1>Building a Wooden International One Metre Remote Control Yacht</h1>

      <Row>
        <Column width="40%">
          <ExpandableImage src={mainPhoto} alt="The Outer Fibreglassed Hull"  caption="The Outer Fibreglassed Hull; Note the beautiful knurling towards the fore of the boat." />
        </Column>
        <Column width="55%">
          <p style={{marginTop: '0'}}>
            I love sailing and I especially love wooden boats. Unfortunately, living in a flat in London on a student salary prevents me from having a garage or real workshop space for
            the time being. Wanting to still pursue my desire and learn some wooden boat building skills in the interim, I have scaled down my expectations considerably; 
            hopefully with a scaled down cost too!
          </p>
          <p>
            The <a href="https://en.wikipedia.org/wiki/One_Metre" target="_blank" rel="noopener noreferrer">International One Metre </a> is a world renowned class of remote control (RC) 
            sailing yacht that is raced competitively around the world. Whilst I don't see my future in RC yacht racing, due to its prevelance as a class, there is a wealth of information and 
            resources available online for free for the home builder. 
          </p>
          <p>
            The finished boat will undoubtedly not be a competitive racer but rather a learning experience in wooden boat building and hopefully a fun little boat to sail 
            around ponds and canals, and at the very least a nice wall decoration.
            I have yet to even check if Regent's canal has enough depth for the keel !!
          </p>
        </Column>
      </Row>

      <FullWidth>
        <h2>Deciding upon a Design, Materials, and Tools</h2>

        <p>
          There are many good designs to be found online, each with their own pros and cons. I ended up choosing the  
          <a href="https://www.frankrusselldesign.com/plans/iom/" target="_blank" rel="noopener noreferrer"> Aeon</a> as it looked like an interesting modern design, and the purchased
          drawings include a file for laser cutting the shadows (the forms to be planked around). Saving much time in having to mark out and hand cut them myself. More information
          about different designs online can be found <a href="https://www.wmrmyc.club/latest/building-a-woodie-iom" target="_blank" rel="noopener noreferrer">here</a>.
        </p>

        <p>
          Finding apt materials was a bit of a challenge, but I stumbled across the following 
          <a href="https://cedar-strip.co.uk/model_boats.html#content6-ay" target="_blank" rel="noopener noreferrer"> website</a> that provides Cedar strip planks sized for model yachts.
          I went for the 3mm x 10mm x 1200mm planks and luckily received a set with some beautiful knurling on one half of each plank which I have "mostly" aligned for a nice effect (after I had laid the first plank
          I realised this was the case: the port gunwhale is the wrong way around).          
        </p>

        <p>
          Alongside the usual woodworking tooling, these are the specialist tools and materials I used during the project: 
        </p>
        
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
              <th>Item</th>
              <th>Online Link (for UK based buyers)</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Model Hand Plane</strong></td>
              <td><a href="https://www.dbsportandscale.com/david-combi-plane-wblades-7602-p.asp" target="_blank" rel="noopener noreferrer">Website</a> </td>
              <td>Essential for tapering the planks.</td>
            </tr>
            <tr>
              <td><strong>Selection of rubber bands, binder clips, and drawing pins</strong></td>
              <td>NA</td>
              <td>Holds planks together upon shadows.</td>
            </tr>
            <tr>
              <td><strong>Alphatic Glue</strong></td>
              <td><a href="https://www.cornwallmodelboats.co.uk/acatalog/CMB-Glue-Pack-for-Building-R-C-Models-CMBGP3.html#SID=2506" target="_blank" rel="noopener noreferrer">Website</a> </td>
              <td>As expected.</td>
            </tr>
            <tr>
              <td><strong>PC-11</strong></td>
              <td><a href="https://pcepoxy.co.uk/products/pc-11-paste-epoxy?_pos=1&_sid=726bc029a&_ss=r" target="_blank" rel="noopener noreferrer">Website</a> </td>
              <td>Waterproof epoxy paste for filleting joins. As used by one of the most calming and informative model yacht youtubers: <a href="https://www.youtube.com/@sailtails2775/videos" target="_blank" rel="noopener noreferrer">sailtails</a></td>
            </tr>
          </tbody>
        </table>
      </FullWidth>

      <FullWidth>
        <h2>Building the Form and Planking</h2>

        <p>
          I assembled the laser cut forms with wood glue but in retrospect using hot glue would be recommended as this makes for easier dissasembly and reuse.
          Each shadow's edge was sellotaped to prevent the planks from being glued to the forms, except the first and last shadow so that the wood does stick here.
        </p>

        <p>
          Initially I started wth the gunwhale planks as well as two keel planks following the centreline.
          At first I was using clamps and jigs to hold the planks in place but found these to not apply enough force later on!
          Subsequent planks were laid at the same time on alternate sides and the next layer started onced the glue had dried.
          A useful picture gallery that helped guide my build process can be found <a href="https://photos.google.com/share/AF1QipMxXed35p9TqF_ukh014gf5LKZGhJ2iLm7HowIGwV-TOdwpK4bMF-BfP6CFZ3Obsw?key=T3puVTJtZ1FsNXhPckZCNmNUWTY4QVdyeU9zQTZR" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </FullWidth>

      <Row>
        <Column width="30%">
          <ExpandableImage src={onePhoto} alt="Pure Forms" caption="The full set of forms (peek my AC37 glass!)" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={twoPhoto} alt="Early Fore of the Process" caption="The beautiful knurling!" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={threePhoto} alt="Early Aft of the Process" caption="Early on using clamps and jigs" />
        </Column>
      </Row>

      <FullWidth>
        <p>
          Using the aformentioned hand plane, planks were tapered towards the ends to form around the curvature.
          I was a bit resistant to aggresive tapering, but this led to an incorrect angle of planks against the shadows and thus each plank incurring lots of twist.
          Therefore, I needed more force to hold the planks and so moved on to an intensive array of rubber bands, drawing pins, and binder clips!
          This twist created a lot of internal stress in the wood, but as a silver lining perhaps that increases the strength of the hull; some pre tensile load perhaps?
        </p>

        <p>
          This was most noticeable towards the aft of the boat where the fit was not great, at least it can be partially rectified with sanding.
          Due to the extreme bending at the aft I found the best method to hold to the forms was some tensioned twine!
        </p>
        
      </FullWidth>

      <Row>
        <Column width="30%">
          <ExpandableImage src={fourPhoto} alt="Using Rubber Bands and Pins" caption="Moving on to rubber bands and drawing pins!" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={fivePhoto} alt="Using Masking Tape" caption="...even some masking tape too..." />
        </Column>
        <Column width="30%">
          <ExpandableImage src={sixPhoto} alt="Finally some Tensioned Twine" caption="Plus some tensioned twine!" />
        </Column>
      </Row>

      <FullWidth>
        <p>
          The rubber band and binder clip setup was great and held planks tight to the form.
          Unfortunately, the high compressive strength led to a buckle as I was too eager to do another layer before the last layer's glue had fully dried!         
        </p>   

        <p>
          I scrambled to force the buckle back and then reglued the gap to ensure correct bonding.
          This again will come out in sanding but lead to some fairly thin planks in that section, lessons for next time.
          I would recommend waiting at least a day or two between layers, which ended up being a very slow process; perhaps reducing internal stress through better plank
          placement planning would mean less waiting time between layers. 
        </p>     
      </FullWidth>

      <Row>
        <Column width="30%">
          <ExpandableImage src={sevenPhoto} alt="The Trusty Hand Plane" caption="The trusty hand plane!" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={eightPhoto} alt="Buckling Number One" caption="My eagerness leading to a buckle!" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={ninePhoto} alt="Buckling Number Two" caption="A questionable post-hoc repair with glue!" />
        </Column>
      </Row>

      <FullWidth>
        <p>
          After some weeks I finally finished the planking; an enjoyable process that I was sad to see the end of.
          At the latter stages I also incorporated fishing line and more pins to replace the rubber band and binder clip setup as this was not as useful once enough of the transversal curve had been travesed
          and the planks were too close so that the clips could not be attached.
          The planks had followed the shadows well although there were a couple of areas of warping and gaps.
          Next time I would plan the plank placement more carefully to avoid these induced problems, but as a first attempt I think I bodged it okay.
        </p>

        <p>
          For reference, another Aeon builder posted their process on <a href="https://www.facebook.com/photo/?fbid=1380545820743730&set=a.1380560097408969" target="_blank" rel="noopener noreferrer">Facebook</a> that showed 
          them leaving a large gap in the planking between the gunwhale and keel at the fore of the boat.
          I think this was in order to line up the angle of the planks to match the angle along the transverse curve: to allow the planks to follow their natural line around the hull.
          Since this design has a very full volumnous bow and a narrow stern the planks naturally wanted to take an angle that diverges heavily from the gunwhale.
          In designs where the difference in angle is not so great, it can be rectified by plank tapering alone.          
          My method instead was a fully contiguous planking from gunwhale to keel, leading to planks not following the natural line and thus experieincing internal stress.
          So many interesting downstream effects of hull volume placement in wooden and specifically planked boat building!
        </p>

        <p>
          I did not like that the transom was the birch laser cut ply: instead I made up a new transom from the Cedar planks and refit the transom so that the hull appeared fully planked.
          The true Aeon design has an angled transom, but for manufacturing ease I went for purely vertical.
          Sadly I do not have a photo of this change but it will be clear from later images.
        </p>
      </FullWidth>

      <Row>
        <Column width="30%">
          <ExpandableImage src={tenPhoto} alt="The Trusty Hand Plane Again" caption="" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={elevenPhoto} alt="Finalising the Front" caption="" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={twelvePhoto} alt="The Last Plank" caption="Your final form? So old, so new" />
        </Column>
      </Row>

      <FullWidth>
        <h2>Fibreglassing and Removing Hull from Mould</h2>

        <p>
          The act of remembering to take photos had a brief interlude at this stage of the process, so there is sparse visual evidence sadly!
          Primarily though it involved a LOT of sanding, especially due to some of the poorer alignment of planks.
          This led to some fairly thin spots in the hull post sanding, but due to the internal stress it still felt fairly strong, hopefully the fibgrelass layer helps hold these areas together under any impact!
          I saved some of the sanded dust and mixed it with epoxy to fill in any pin holes, giving a nice old timely wooden boat look as sanded dust appears darker.
        </p>

        <p>
          Following on was fibreglassing, I used one layer of 50g cloth as recommended by the <a href="https://nelsonradiosailing.com/building-my-second-cedar-v8-iom-yacht/" target="_blank" rel="noopener noreferrer">following</a>, 
          with the <a href="https://www.easycomposites.co.uk/el2-epoxy-laminating-resin" target="_blank" rel="noopener noreferrer">EL2</a> resin from easy composites. <a href="https://www.epoxyworks.com/fiberglassing-a-woodstrip-hull/" target="_blank" rel="noopener noreferrer">This website</a> gave 
          great tips on how to get a good surface finish, I would highly recommend!
          For the future I would like to build an all natural wooden boat without relying upon fibreglass and resin, or at least using some natural alternatives to these materials.
          I worry at their environmental impact, as well as all the disposable gloves, brushes, etc used in the layup process. Bring on the flax composites!
        </p>

        <p>
          Once dried, excess fibreglass was cut off and the boat removed from the mould.
          The inner planks were sanded much the same as the outside in preparation for fibreglass.
          I added some internal planks to the gunwhales in preparation for attaching the deck and other deck hardware, in retrospect it may be best to leave a lip as this may be preferential to get a nice edge with the deck and bonding surface!
        </p>

        <p>
          In my na&iuml;vety I went to fibreglass the inside with only one sheet: a messy process of attempting to get the sheet to fit into all the tight crevices ensued.
          Cue a meltdown and a hasty removal of the fibreglass sheet, leaving just resin, let us hope it's okay!
          For your own sanity I would recommend cutting the sheet in at least half for longitudinal strips to avoid sticky resin messes with tight corners etc !!
          The final hull looks fantastic and is hopefully strong enough to withstand the learning process of a beginner RC sailor!
          {/* things I would make not of and do differentialy next time: */}
        </p>

      </FullWidth>

      <Row>
        <Column width="30%">
          <ExpandableImage src={thirteenPhoto} alt="Resin Photo One" caption="" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={fourteenPhoto} alt="Resin Photo Two" caption="" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={fifteenPhoto} alt="The Inner Surface" caption="The fibreglassed hull!" />
        </Column>
      </Row>

      {/* <FullWidth>
        <h2>Fitting out the Hull Internals</h2>

        <p>
          bought those bits from that website for keel case and mast step? or support and main sheet post etc
          added in the recommend drawing internal framing, although my hull was wider than the design so the back two supports are actually under compression, added some fibreglassing to the fillets to strengthen
        </p>

        <p>
          to keep costs down i bought a cheap second hand boat for parts, came with the following:
          thanks to dude who had lush backyard shed workshop, the joys of retirement and owning a house !
        </p>

      </FullWidth>

      <FullWidth>
        <h2>Attaching Hull Apendages and Deck</h2>
      </FullWidth>

      <FullWidth>
        <h2>First Float and Sail</h2>
      </FullWidth> */}

    </div>
  );
};

export default ProjectPageInternationalOneMetre1;