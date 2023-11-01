// llm-endpoints.js

export function LLMEndpoint() {
    // Other properties and methods can be here if needed
}

LLMEndpoint.callEndpoint = async function(userInput) {
        const URI = "https://prepare-colour-combine-dns.trycloudflare.com/api/v1/chat";
        const history = {
            "internal": [],
            "visible": []
          };
        const requestPayload = {
        user_input: userInput,
        max_new_tokens: 250,
        auto_max_new_tokens: false,
        max_tokens_second: 0,
        history: history, 
        mode: "chat",
        character: "Spooky",
        instruction_template: "Spooky-v1",
        your_name: "You",
        regenerate: false,
        _continue: false,
        chat_instruct_command: 'Continue the chat dialogue below. Write a single reply for the character. "".\n\n',
        preset: "simple-1",
        do_sample: true,
        temperature: 0.9,
        top_p: 0.7,
        typical_p: 1,
        epsilon_cutoff: 0,
        eta_cutoff: 0,
        tfs: 1,
        top_a: 0,
        repetition_penalty: 1.18,
        presence_penalty: 0,
        frequency_penalty: 0,
        repetition_penalty_range: 0,
        top_k: 35,
        min_length: 0,
        no_repeat_ngram_size: 0,
        num_beams: 1,
        penalty_alpha: 0,
        length_penalty: 1,
        early_stopping: false,
        mirostat_mode: 0,
        mirostat_tau: 5,
        mirostat_eta: 0.1,
        grammar_string: "",
        guidance_scale: 1,
        negative_prompt: "",
        seed: -1,
        add_bos_token: true,
        truncation_length: 2048,
        ban_eos_token: false,
        custom_token_bans: "",
        skip_special_tokens: true,
        stopping_strings: []  // your stopping strings here
        };
    
        try {
            const response = await fetch(URI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestPayload)
            });
    
            if (response.status === 200) {
                const result = await response.json();
                const output = result.results[0].history.visible[result.results[0].history.visible.length - 1][1];
                let formattedOutput = output.replace(/&#x27;/g, "'");
                formattedOutput = formattedOutput.replace(/USER: [^\n]*/, ''); 
                formattedOutput = formattedOutput.replace(/user: [^\n]*/, '');
                let matches = formattedOutput.match(/ASSISTENT: [^\n]*/);
                if (matches && matches.length > 0) {
                    formattedOutput = matches[0];
                    // Optionally, remove the "ASSISTENT:" prefix
                    formattedOutput = formattedOutput.replace(/ASSISTENT: /, '');
                }  
                formattedOutput = formattedOutput.replace(/\b[A-Z][A-Z\s]*:\s?/g, "");
                formattedOutput = formattedOutput.replace(/\*[^*]+\*/g, "");
                // quatation marks " 
                formattedOutput = formattedOutput.replace(/"/g, "");
                // emojis 
                formattedOutput = formattedOutput.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}]/ug, "");

                // format for &quot; and &amp; and &gt; and &lt;
                formattedOutput = formattedOutput.replace(/&quot;/g, '"');
                formattedOutput = formattedOutput.replace(/&amp;/g, '&');
                formattedOutput = formattedOutput.replace(/&gt;/g, '>');
                formattedOutput = formattedOutput.replace(/&lt;/g, '<');
                // format for <br>
                formattedOutput = formattedOutput.replace(/<br>/g, '\n');
                // format for <p>
                formattedOutput = formattedOutput.replace(/<p>/g, '\n');
                formattedOutput = formattedOutput.replace(/<\/p>/g, '');
                // format for <b>
                formattedOutput = formattedOutput.replace(/<b>/g, '');
                formattedOutput = formattedOutput.replace(/<\/b>/g, '');
                console.log(formattedOutput);
                return formattedOutput; // return the formatted output
            } else {
                console.error('Error:', response.status);
                return null;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };