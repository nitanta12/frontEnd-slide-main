import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./fileupload.css";
import { ImageConfig } from "./ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";
import { Box, Card, CardBody, CardHeader, Center, Flex, Spacer, Stack, StackDivider, Text } from "@chakra-ui/react";
import { postUpload } from "../../api/api";
import LoadingSpin from "../LoadingSpin";

const pdfjsLib = window["pdfjs-dist/build/pdf"];

const FileUpload = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);
  
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const [fileContent, setFileContent] = useState({});
  
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(newFile);

    if (newFile) {
      reader.onload = (event) => {
        console.log("file uploaded");
        const pdfData = new Uint8Array(reader.result);
        console.log(pdfData);

        const loadingTask = pdfjsLib.getDocument({ data: pdfData });

        loadingTask.promise
          .then(function (doc) {
            const numPages = doc.numPages;
            console.log("# Document Loaded");
            console.log("Number of Pages: " + numPages);
            console.log();

            let lastPromise; // will be used to chain promises
            lastPromise = doc.getMetadata().then(function (data) {
              console.log("# Metadata Is Loaded");
              console.log("## Info");
              console.log(JSON.stringify(data.info, null, 2));
              console.log();
              if (data.metadata) {
                console.log("## Metadata");
                console.log(JSON.stringify(data.metadata.getAll(), null, 2));
                console.log();
              }
            });

            const loadPage = function (pageNum) {
              return doc.getPage(pageNum).then(function (page) {
                console.log("# Page " + pageNum);
                const viewport = page.getViewport({ scale: 1.0 });
                console.log("Size: " + viewport.width + "x" + viewport.height);
                console.log();
                return page
                  .getTextContent()
                  .then(function (content) {
                    const strings = content.items.map(function (item) {
                      return item.str;
                    });
                    console.log("## Text Content");
                    // console.log(strings.join(" "));
                    fileContent[pageNum] = strings.join(" ");
                    // Release page resources.
                    page.cleanup();
                  })
                  .then(function () {
                    console.log();
                  });
              });
            };
            // Loading of the first page will wait on metadata and subsequent loadings
            // will wait on the previous pages.
            for (let i = 1; i <= numPages; i++) {
              lastPromise = lastPromise.then(loadPage.bind(null, i));
            }
            return lastPromise;
          })
          .then(
            function () {
              console.log("# End of Document");

              props.onFileChange(fileContent);
            },
            function (err) {
              console.error("Error: " + err);
            }
          );
      };

      //   reader.readAsText(newFile);
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const submitContent = async (e) => {
    e.preventDefault();
    console.log(fileContent);
    setLoading(true);
    const response = await postUpload(fileContent);
    setGeneratedContent(response);
    setLoading(false);
  };
  
  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <Box
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Box className="drop-file-input__label">
          <Center>
            <img src={uploadImg} alt="" />
          </Center>
          <p>Click to Upload or Drag & Drop your files here</p>
        </Box>
        <input type="file" value="" onChange={onFileDrop} />
      </Box>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Uploaded</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item flex">
              <img
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
          <button onClick={submitContent} className="border rounded px-8 my-5 py-2 bg-[#00df9a] hover:bg-[#00df98bc] text-black font-semibold">Generate</button>
        </div>
      ) : null}
      {loading && <LoadingSpin />}
      {generatedContent && (
        <div className="my-5">
          <Card variant={'filled'}>
            <CardHeader>
              <h2 className="font-bold text-zinc-700 lg:text-2xl md:text-xl text-lg py-3">Generated Content</h2>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='5'>
                <Box>
                  <h2 className="font-bold text-zinc-700 lg:text-lg md:text-lg text-md">
                    Presentation Slide
                  </h2>
                  <Flex>
                    <Text pt='5' fontSize='md'>
                      Your Presenatation Slide is now Ready!
                    </Text>
                    <Spacer/>
                    <button className="border rounded md:px-5 px-2 py-2 bg-bg-[#87CEEB] hover:bg-[white] text-black font-semibold">
                      <a href={generatedContent.presentation_link} target="_blank" rel="noopener noreferrer">
                          View Slide
                      </a>
                    </button>
                  </Flex>
                </Box>
                <Box>
                  <h2 className="font-bold text-zinc-700 lg:text-lg md:text-lg text-md">
                    PowerPoint Presentation
                  </h2>
                  <Flex>
                    <Text pt='5' fontSize='md'>
                      Your Presenatation Slides is now Ready!
                    </Text>
                    <Spacer/>
                    <button className="border rounded md:px-4 px-1 py-2 bg-[#87CEEB] hover:bg-[white] text-black font-semibold">
                      <a href={generatedContent.pptx_link} target="_blank" rel="noopener noreferrer">
                          View Slides
                      </a>
                    </button>
                  </Flex>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  );
};

FileUpload.propTypes = {
  onFileChange: PropTypes.func,
};

export default FileUpload;