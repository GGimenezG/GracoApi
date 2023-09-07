CREATE PROCEDURE `social_networks_get_web`(
	IN iBusinessId INT,
	IN iId INT
)
BEGIN
DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
	
	SET oRes = 1;
	SET oMessage = 'Get data successfully';
		IF iId = 0 THEN
			SELECT sn.id, sn.name, sn.url
			FROM socialnetworks sn
            WHERE sn.Business_idBusiness = iBusinessId AND sn.status = 'A';
		ELSE
			SELECT sn.id, sn.name, sn.url
			FROM socialnetworks sn
			WHERE sn.Business_idBusiness = iBusinessId AND sn.id = iId AND sn.status = 'A';
		END IF;
	
    SELECT oRes as success, oMessage as message;
END