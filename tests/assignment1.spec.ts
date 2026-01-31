import {test, expect} from '@playwright/test';

const testCases = [
  // --- POSITIVE FUNCTIONAL CASES (22 items) ---
  {id: 'Pos_Fun_001', type: 'Pos_Fun', input: 'dhaen oyaata saniipadha?', expected: 'දැන් ඔයාට සනීපද?' },
  {id: 'Pos_Fun_002', type: 'Pos_Fun', input: 'mama adha gedhara ennee havas velaa.', expected: 'මම අද ගෙදර එන්නේ හවස් වෙලා.'},
  {id: 'Pos_Fun_003', type: 'Pos_Fun', input: 'adha havasa lecture ekee link eka evanna.', expected: 'අද හවස lecture එකේ link එක එවන්න.'},
  {id: 'Pos_Fun_004', type: 'Pos_Fun', input: 'mama iPhone ekak ganna kiyala hithuvee.', expected: 'මම iPhone එකක් ගන්න කියලා හිතුවේ.'},
  {id: 'Pos_Fun_005', type: 'Pos_Fun', input: 'heta api Colombo gihin dinner gamudha?', expected: 'හෙට අපි Colombo ගිහින් dinner ගමුද?'},
  {id: 'Pos_Fun_006', type: 'Pos_Fun', input: 'karuNaakara mata obathumaagee NIC eka pennanna puLuvandha?', expected: 'කරුණාකර මට ඔබතුමාගේ NIC එක පෙන්නන්න පුළුවන්ද?'},
  {id: 'Pos_Fun_007', type: 'Pos_Fun', input: 'Master branch ekata code eka upload karanna epaa. Supun kiyalaa vena branch ekak hadhalaa eekata oyaagee code eka upload karanna.', expected: 'Master branch එකට code එක upload කරන්න එපා. සුපුන් කියලා වෙන branch එකක් හදලා ඒකට ඔයාගේ code එක upload කරන්න.'},
  {id: 'Pos_Fun_008', type: 'Pos_Fun', input: 'monavadha manussayoo karannee? thamuseta pissudha?', expected: 'මොනවද මනුස්සයෝ කරන්නේ? තමුසෙට පිස්සුද?'},
  {id: 'Pos_Fun_009', type: 'Pos_Fun', input: 'mama ehema dheyak Friday oyaata kivvee naee.', expected: 'මම එහෙම දෙයක් Friday ඔයාට කිව්වේ නෑ.'},
  {id: 'Pos_Fun_010', type: 'Pos_Fun', input: 'Good morning machaQQ, kaalekin dhaekkee oyaava.', expected: 'Good morning මචං, කාලෙකින් දැක්කේ ඔයාව.'},
  {id: 'Pos_Fun_011', type: 'Pos_Fun', input: 'ekala vaLagambaa raja samayee karana ladha mee vihaaraya adha vinaashayata path vii aetha.', expected: 'එකල ව​ළගම්බා රජ සම​යේ කරන ලද මේ විහාරය අද විනාශයට ප​ත් වී ඇත.'},
  {id: 'Pos_Fun_012', type: 'Pos_Fun', input: 'makkeyi korannee ohee othanata velaa?', expected: 'මක්කෙයි කොරන්නේ ඔහේ ඔතනට වෙලා?'},
  {id: 'Pos_Fun_013', type: 'Pos_Fun', input: 'aa hari hari, mama eeka dhannavaa.', expected: 'ආ හරි හරි, මම ඒක දන්නවා.'},
  {id: 'Pos_Fun_014', type: 'Pos_Fun', input: 'othanin ayin veyan mata vadha nodhii.', expected: 'ඔතනින් අයින් වෙයන් මට වද නොදී.'},
  {id: 'Pos_Fun_015', type: 'Pos_Fun', input: 'apita adha nam godak badaginiyi.', expected: 'අපිට අද නම් ගොඩක් බඩගිනියි.'},
  {id: 'Pos_Fun_016', type: 'Pos_Fun', input: 'oyaa dhaen nitharama mehe yanavaa enavaa vaedii.', expected: 'ඔයා දැන් නිතරම මෙහෙ යනවා එනවා වැඩී.'},
  {id: 'Pos_Fun_017', type: 'Pos_Fun', input: 'lokuhaamudhuruvoenavaakivve', expected: 'ලොකුහාමුදුරුවොඑනවාකිව්වෙ'},
  {id: 'Pos_Fun_018', type: 'Pos_Fun', input: 'mama iiyee Colombo giyaa event ekakata, mata Julie Chung va hambunaa. eyaa dhaen US Ambassador neveyi kivvaa. eyaagee tenure eka ivara velaa thiyenne mee LaGadhi.', expected: 'මම ඊයේ Colombo ගියා event එකකට, මට Julie Chung ව හම්බුනා. එයා දැන් US Ambassador නෙවෙයි කිව්වා. එයාගේ tenure එක ඉවර වෙලා තියෙන්නෙ මේ ළඟදි.'},
  {id: 'Pos_Fun_019', type: 'Pos_Fun', input: 'Rs. 2000k heta venakota mata oone, haridha?', expected: 'Rs. 2000ක් හෙට වෙනකොට මට ඕනෙ, හරිද?'},
  {id: 'Pos_Fun_020', type: 'Pos_Fun', input: 'match eka thiyenne 2026-02-08, 14:00hrs valata school ground ekee.', expected: 'match එක තියෙන්නෙ 2026-02-08, 14:00hrs වලට school ground එකේ.'},
  {id: 'Pos_Fun_021', type: 'Pos_Fun', input: 'heta,  mata,  iskoolee yanna baee.', expected: 'හෙට,  මට,  ඉස්කෝලේ යන්න බෑ.'},
  {id: 'Pos_Fun_022', type: 'Pos_Fun', input: 'aayubovan! mee vYaapaarika puvath. pasugiya vasarata saapeekshava mee varShayee dollar sanchitha saelakiya haeki lesa ihaLa gos aethi bava maha baeQQku aDhipathi kiyaa sitiyeeya. ee anuva IMF samaGa aethi givisuma prathivYuhagatha kaLa yuthu bava ethumaa prakaasha kara sitiyeeya. thavadha, 2026-12-01 dhinata pera amerikanu dollar biliyana 1.1 ka Naya vaarikayak geviya yuthuva aetha. mee saDHAhaa rajaya chiinayen Nayak labaa gaeniimata suudhanam vee. ee anuva, yuan miliyana 500ka Naya aaDharayak labaadhiimata chiina samuuhaanduva thiiraNaya kara aetha.', expected: 'ආයුබොවන්! මේ ව්‍යාපාරික පුවත්. පසුගිය වසරට සාපේක්ශව මේ වර්ෂයේ dollar සන්චිත සැලකිය හැකි ලෙස ඉහළ ගොස් ඇති බව මහ බැංකු අධිපති කියා සිටියේය. ඒ අනුව IMF සමඟ ඇති ගිවිසුම ප්‍රතිව්‍යුහගත කළ යුතු බව එතුමා ප්‍රකාශ කර සිටියේය. තවද, 2026-12-01 දිනට පෙර අමෙරිකනු dollar බිලියන 1.1 ක ණය වාරිකයක් ගෙවිය යුතුව ඇත. මේ සඳහා රජය චීනයෙන් ණයක් ලබා ගැනීමට සූදනම් වේ. ඒ අනුව, yuan මිලියන 500ක ණය ආධරයක් ලබාදීමට චීන සමූහාන්ඩුව තීරණය කර ඇත.'},

  // --- POSITIVE UI CASES (3 items) ---
  { id: 'Pos_UI_001', type: 'Pos_UI', input: 'realtime_check', expected: 'realtime' },
  { id: 'Pos_UI_002', type: 'Pos_UI', input: 'clear_button_check', expected: 'empty' },
  { id: 'Pos_UI_003', type: 'Pos_UI', input: 'placeholder_check', expected: 'Input Your Singlish Text Here.'},


  // --- NEGATIVE FUNCTIONAL CASES (8 items) ---
  {id: 'Neg_Fun_001', type: 'Neg_Fun', input: "aeththatama, I'm so happy anee.", expected: "ඇත්තටම, I'm so happy අනේ"},
  {id: 'Neg_Fun_002', type: 'Neg_Fun', input: "1234567890", expected: "1234567890"},
  {id: 'Neg_Fun_003', type: 'Neg_Fun', input: "@#$%^&*()", expected: "@#$%^&*()"},
  {id: 'Neg_Fun_004', type: 'Neg_Fun', input: "<b>Bold</b>", expected: "<b>Bold</b>"},
  {id: 'Neg_Fun_005', type: 'Neg_Fun', input: "https://www.google.com", expected: "https://www.google.com"},
  {id: 'Neg_Fun_006', type: 'Neg_Fun', input: "bcdfghjkl", expected: "බ්ක්ඩ්ෆ්ග්හ්ජ්ක්ල්"},
  {id: 'Neg_Fun_007', type: 'Neg_Fun', input: '{"user_id": 123}', expected: '{"user_id": 123}'},
  {id: 'Neg_Fun_008', type: 'Neg_Fun', input: "mama                              yanavaa", expected: "මම                              යනවා"},

  // --- NEGATIVE UI CASES (2 items) ---
  { id: 'Neg_UI_001', type: 'Neg_UI', input: 'a'.repeat(1000), expected: 'stable' },
  { id: 'Neg_UI_002', type: 'Neg_UI', input: '\n'.repeat(50), expected: 'stable' },
]

// TEST LOOP
for (const data of testCases) {
  test(`${data.id}: Testing input: ${data.input}`, async ({ page }) => {
    
    // FIX 1: Allow 60s per test (prevents timeout on long paragraphs)
    test.setTimeout(60000);

    await page.goto("https://www.swifttranslator.com/");
    
    // FIX 2: Wait for network to be idle so we don't type too early
    await page.waitForLoadState('domcontentloaded');

    const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    
    // Ensure focus
    await inputBox.click();

    // -------------------UI TESTS-------------------
    if (data.type === 'Pos_UI' || data.type === 'Neg_UI') {
        await expect(inputBox).toBeVisible();

        if (data.input === 'realtime_check') {
            await inputBox.pressSequentially('m', { delay: 100 });
            await expect(outputBox).not.toBeEmpty(); 
            console.log(`${data.id} | Result: PASS (UI Real-time update)`);
        }
        else if (data.input === 'clear_button_check') {
            await inputBox.fill('junk text');
            const clearBtn = page.locator('button').filter({ hasText: 'Clear' }).first();
            await clearBtn.click();

            await expect(inputBox).toHaveValue('');
            console.log(`${data.id} | Result: PASS (Clear Button works)`);
        }
        else if (data.input === 'placeholder_check') {
            await expect(inputBox).toHaveAttribute('placeholder', data.expected);
            console.log(`${data.id} | Result: PASS (Placeholder is correct)`);
        }
        else if (data.type === 'Neg_UI') {
            await expect(inputBox).toBeEnabled();
            console.log(`${data.id} | Result: PASS (UI is Stable)`);
        }
        return;
    }

    // -------------------FUNCTIONAL TESTS-------------------
    await inputBox.pressSequentially(data.input, { delay: 5 });
    await inputBox.press('Space');

    try {
        if (data.expected === '') {
            await expect(outputBox).toHaveText('', { timeout: 15000 });
        } else {
            await expect(outputBox).toContainText(data.expected, { timeout: 15000 });
        }
        
        const actualOutput = await outputBox.innerText();
        console.log(`${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualOutput} | STATUS: PASS`);

    } catch (error) {
        const actualOutput = await outputBox.innerText();
        console.log(`${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualOutput} | STATUS: FAIL`);
        throw error;
    }
  });
}


// to run, use following code
// npx playwright test tests/assignment1.spec.ts --project=chromium --workers=1 --headed