import { PlusOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useAppContext } from "../../../../context"; 

const DetailsPart = () => {
  const { menu } = useAppContext();

  return (
    <Row gutter={12} className="mt-2">
      <Col span={18}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ratione id
        porro delectus pariatur nemo sit. Unde, placeat facilis laudantium odit
        doloremque velit itaque quos debitis error exercitationem provident
        quisquam!
      </Col>
      <Col span={6}>
        <div
          onClick={() => {
            menu.setM_Item("Image"); // Update the context state
          }}
          className="border border-dashed flex justify-center items-center p-2 flex-col rounded cursor-pointer"
        >
          <div className="p-1 border border-blue-600 rounded-full text-blue-500 flex justify-center items-center">
            <PlusOutlined style={{ fontSize: "10px" }} />
          </div>
          <div className="text-center">
            Upload <br /> Image
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DetailsPart;
