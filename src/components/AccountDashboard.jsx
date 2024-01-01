import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import FileUpload from "./contentupload/fileupload";
import LoadingSpin from "./LoadingSpin";
import { postText, postUrl } from "../api/api";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Spacer, Input, Card, Stack, CardBody, Text, CardHeader, StackDivider, Box } from '@chakra-ui/react'

const AccountDashboard = () => {
  const [loading, setLoading] = useState(false);
  
  const [fileContent, setFileContent] = useState(null);

  function handleFileChange(fileContent) {
    console.log("inside handle file change")
    setFileContent(fileContent);
    console.log("file content updaded with value::");
    console.log(fileContent);
  }
  
  const [content, setContent] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  
  const submitContent = async (e) => {
    e.preventDefault();
    console.log(content);
    setLoading(true);
    const response = await postUrl(content);
    setGeneratedContent(response);
    setLoading(false);
  };

  const [textcontent, settextContent] = useState('');
  const [generatedTextContent, setGeneratedTextContent] = useState('');
  
  const submittextContent = async (e) => {
    e.preventDefault();
    console.log(textcontent);
    setLoading(true);
    const response = await postText(textcontent);
    setGeneratedTextContent(response);
    setLoading(false);
  }


  return (
    <div>
      <div className="flex min-h-[90vh]">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="md:ml-[280px] mt-12 mx-3">
          <div className="flex justify-start items-center">
            <h1 className="md:text-3xl text-2xl my-5 ml-2 font-bold text-zinc-700">Convert any document to a Slide</h1>
          </div>
          <div name="Upload Area" className="">
            <div className="container" class="lg:w-[1180px] md:w-[620px] w-[460px]">
              <Tabs variant='soft-rounded' colorScheme='blue'>
                <TabList className="py-4">
                  <Tab className="mr-8">File Upload</Tab>
                  <Tab className="mr-8">URL</Tab>
                  <Tab>Text</Tab>
                </TabList>

                <TabPanels>

                  <TabPanel>
                    <div>
                      <FileUpload onFileChange={handleFileChange} />
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div>
                      <p>
                        {/* url Upload area */}
                        <form action="submit">
                          <div className="form-group">
                              <div>
                                <label className="py-2">URL</label>
                                <Flex className="my-5">
                                <Input onChange={(e) => setContent(e.target.value)} className="border mr-3 w-full" size='md' placeholder="Enter URL here" type="text" />
                                <Spacer/>
                                <button onClick={submitContent} className="border rounded px-8 py-2 bg-[#87CEEB] hover:bg-[white] text-black font-semibold">
                                  Generate
                                </button>
                                </Flex>
                              </div>
                          </div>
                        </form>
                      </p>
                    </div>
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
                                  <button className="border rounded md:px-5 px-2 py-2 bg-[#00df9a] hover:bg-[#00df98bc] text-black font-semibold">
                                    <a href={generatedContent.presentation_link} target="_blank" rel="noopener noreferrer">
                                        View Slide
                                    </a>
                                  </button>
                                </Flex>
                              </Box>
                            </Stack>
                          </CardBody>
                        </Card>
                      </div>
                    )}
                  </TabPanel>

                  <TabPanel>
                    <div class="flex justify-start">
                      <div class="mb-3 mx-3 w-[100%]">
                        {/* <label
                          class="form-label py-4 inline-block mb-2 text-gray-700"
                        >
                          Insert your document content 
                        </label> */}
                        <textarea
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                          "
                          id="content"
                          rows="10"
                          placeholder="Insert your text here"
                          name="content"
                          value={textcontent}
                          onChange={(e) => settextContent(e.target.value)}
                        ></textarea>
                        <button onClick={submittextContent} className="border rounded px-8 my-5 py-2 bg-[#87CEEB] hover:bg-[white] text-black font-semibold">
                          Generate
                        </button>
                      </div>
                    </div>
                    {loading && <LoadingSpin />}
                    {generatedTextContent && (
                      <div className="my-5">
                        <Card variant={'filled'}>
                          <CardHeader>
                            <h2 className="font-bold text-zinc-700 lg:text-2xl md:text-xl text-lg py-3">Generated Content</h2>
                          </CardHeader>

                          <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                              <Box>
                                <h2 className="font-bold text-zinc-700 lg:text-lg md:text-lg text-md">
                                  Presentation Slide
                                </h2>
                                <Flex>
                                  <Text pt='5' fontSize='md'>
                                    Your Presenatation Slide is now Ready!
                                  </Text>
                                  <Spacer/>
                                  <button className="border rounded px-8 py-2 bg-[#00df9a] hover:bg-[#00df98bc] text-black font-semibold">
                                    <a href={generatedTextContent.presentation_link} target="_blank" rel="noopener noreferrer">
                                        View Slide
                                    </a>
                                  </button>
                                </Flex>
                              </Box>
                            </Stack>
                          </CardBody>
                        </Card>
                      </div>
                    )}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
