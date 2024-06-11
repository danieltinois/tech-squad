import React, { useState } from "react";
import "./styles.css";

import { ShareIcon } from "../icons/share";
import { DonationIcon } from "../icons/dolar";
import { SaveIcon } from "../icons/bookmark";
import { CommentIcon } from "../icons/chat";
import { LikeIcon } from "../icons/favorite";

export function Post() {
  const [isHoveredButton, setIsHoveredButton] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(500);

  const handleLikeClick = (e) => {
    if (e.target.checked) {
      setLikes((prevLikes) => prevLikes + 1);
    } else {
      setLikes((prevLikes) => prevLikes - 1);
    }
  };

  const contentPost = `
    <p><strong>Introdução:</strong></p><ul><li>Breve visão geral da importância das peças de computador na construção de sistemas funcionais.</li><li>Importância da compatibilidade e integração entre componentes.</li></ul><p><strong>Processador (CPU):</strong></p><ul><li>Função como o cérebro do computador.</li><li>Explicação sobre arquiteturas, como x86, x64, ARM, etc.</li><li>Discussão sobre núcleos, threads, velocidades de clock e cache.</li></ul><p><strong>Placa-mãe:</strong></p><ul><li>Descrição da placa-mãe como o "esqueleto" do computador.</li><li>Explicação dos slots de expansão, como PCI, PCIe, RAM slots, etc.</li><li>Discussão sobre chipset, BIOS/UEFI e conectores.</li></ul><p><strong>Memória RAM:</strong></p><ul><li>Importância da RAM na velocidade e desempenho do sistema.</li><li>Explicação sobre tipos de RAM, como DDR3, DDR4, capacidades e frequências.</li><li>Discussão sobre dual-channel, quad-channel e ECC.</li></ul><p><strong>Placa de vídeo (GPU):</strong></p><ul><li>Papel da GPU no processamento gráfico.</li><li>Explicação sobre GPUs integradas e dedicadas.</li><li>Discussão sobre arquiteturas (NVIDIA, AMD), VRAM e resoluções suportadas.</li></ul><p><strong>Armazenamento:</strong></p><ul><li>Tipos de armazenamento: HDDs, SSDs, NVMe.</li><li>Explicação sobre capacidades, velocidades de leitura/gravação e durabilidade.</li><li>Discussão sobre interfaces, como SATA, PCIe, M.2.</li></ul><p><strong>Fonte de alimentação:</strong></p><ul><li>Importância da PSU na distribuição de energia.</li><li>Explicação sobre certificações de eficiência, capacidades e conectores.</li><li>Discussão sobre energia modular vs não-modular.</li></ul><p><strong>Refrigeração:</strong></p><ul><li>Significado da refrigeração eficaz para a estabilidade e vida útil do sistema.</li><li>Explicação sobre diferentes métodos de resfriamento: ar, líquido.</li><li>Discussão sobre ventoinhas, dissipadores de calor e sistemas de refrigeração líquida.</li></ul><p><strong>Gabinete:</strong></p><ul><li>Importância do gabinete na organização e proteção dos componentes.</li><li>Explicação sobre fatores de forma, tamanhos e características de design.</li><li>Discussão sobre ventilação, gerenciamento de cabos e personalização estética.</li></ul><p><strong>Periféricos:</strong></p><ul><li>Breve visão geral sobre dispositivos de entrada e saída.</li><li>Explicação sobre teclados, ratos, monitores, impressoras, etc.</li><li>Discussão sobre conectividade, drivers e compatibilidade.</li></ul><p><strong>Montagem e Manutenção:</strong></p><ul><li>Passos básicos para montagem de um computador.</li><li>Importância da manutenção preventiva e diagnóstico de problemas.</li><li>Discussão sobre atualizações de hardware e software.</li></ul><p><strong>Considerações Finais:</strong></p><ul><li>Recapitulação da importância de entender as peças de computador para construir sistemas eficientes.</li><li>Encorajamento à pesquisa adicional e prática na construção e manutenção de computadores.</li></ul><pre class="ql-syntax" spellcheck="false">  const handleSubmit = (event) =&gt; {
    event.preventDefault();
    // Aqui você pode enviar os dados para o backend.
    console.log("Title:", title);
    console.log("Body:", body);
  };
</pre>
  `;

  const truncatedContentPost = isExpanded
    ? contentPost
    : contentPost.slice(0, 500);

  return (
    <div className="custom-post-container">
      <div className="container profile">
        <div className="row">
          <div className="col-12">
            <div className="card-custom mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <a href="#">
                    <img
                      src="https://i.pinimg.com/originals/91/06/fd/9106fde88b0fdf39d4793fa145299da9.jpg"
                      alt=""
                      className="img-profile"
                    />
                  </a>
                  <div className="flex-fill ps-2">
                    <div className="fw-bold mb-1">
                      <a href="#" className="text-decoration-none text-dark">
                        User1
                      </a>
                    </div>
                    <div className="small text-body text-opacity-50">
                      <img
                        src="https://avatars.githubusercontent.com/u/99421761?s=400&u=dd76f7f8c19436a56e670ddc9e9bd3eb7410cc0d&v=4"
                        width="30"
                        alt=""
                        className="img-approved-profile me-1"
                      />
                      <span className="approved-span-profile">
                        Approved by admin
                      </span>{" "}
                      | 1 day ago
                    </div>
                  </div>
                </div>
                <h4>Post title</h4>
                <div className="truncated-text">
                  <div
                    dangerouslySetInnerHTML={{ __html: truncatedContentPost }}
                  />
                  {!isExpanded && (
                    <button
                      className="btn-custom-isExpanded"
                      onClick={() => setIsExpanded(true)}
                    >
                      ...view more
                    </button>
                  )}
                </div>

                {/* <div className="full-img-container">
                  <img
                    src="https://s.zst.com.br/cms-assets/2020/11/soquete.jpg"
                    alt=""
                    className="full-img"
                  />
                </div> */}

                <div className="my-3 text-body text-opacity-50">
                  <span>{likes} likes</span>
                  <span className="separation-point">.</span>
                  <span>21 comments</span>
                </div>

                <div className="d-flex justify-content-between btn-custom-post">
                  <div className="btn-group-principal">
                    <button
                      onMouseEnter={() => setIsHoveredButton("like")}
                      onMouseLeave={() => setIsHoveredButton(null)}
                    >
                      <label className="container-heart">
                        <input type="checkbox" onChange={handleLikeClick} />
                        <div className="checkmark">
                          <LikeIcon
                            className="icon"
                            isHovered={isHoveredButton === "like"}
                          />
                        </div>
                        Like
                      </label>
                    </button>
                    <button
                      onMouseEnter={() => setIsHoveredButton("comment")}
                      onMouseLeave={() => setIsHoveredButton(null)}
                    >
                      <CommentIcon
                        className="icon"
                        isHovered={isHoveredButton === "comment"}
                      />
                      Comment
                    </button>
                    <button
                      onMouseEnter={() => setIsHoveredButton("save")}
                      onMouseLeave={() => setIsHoveredButton(null)}
                    >
                      <label for="checkboxInput" className="bookmark">
                        <input type="checkbox" id="checkboxInput" />
                        <SaveIcon
                          className="svgIcon"
                          isHovered={isHoveredButton === "save"}
                        />
                        Save
                      </label>
                    </button>
                    <button
                      onMouseEnter={() => setIsHoveredButton("donate")}
                      onMouseLeave={() => setIsHoveredButton(null)}
                    >
                      <DonationIcon
                        className="icon"
                        isHovered={isHoveredButton === "donate"}
                      />
                      Donate
                    </button>
                  </div>

                  <button
                    onMouseEnter={() => setIsHoveredButton("share")}
                    onMouseLeave={() => setIsHoveredButton(null)}
                  >
                    <ShareIcon
                      className="icon"
                      isHovered={isHoveredButton === "share"}
                    />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
